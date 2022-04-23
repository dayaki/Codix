import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Spinner } from '../../common';
import apiService from '../../utils/apiService';
import { getBarcodeDetails, postReportDevice } from '../../utils/endpoints';
import { styles } from '../styles';
import { checkRegStatus } from './utils';

interface BarcodeData {
  id: string;
  customer: {
    customerName: string;
    address: string;
  };
  product: {
    productServiceName: string;
  };
  batch: {
    batchNumber: string;
  };
}

const FaultyDevice = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [page, setPage] = useState(1);
  const [barcode, setBarcode] = useState('');
  const [product, setProduct] = useState('');
  const [barcodeData, setBarcodeData] = useState<BarcodeData>({
    id: '7881',
    customer: {
      customerName: '',
      address: '',
    },
    product: {
      productServiceName: '',
    },
    batch: {
      batchNumber: '',
    },
  });
  const [comments, setComments] = useState('');

  const onSuccess = async ({ data }: { data: string }) => {
    setSpinner(true);
    const barcodeIds = data.split(' ');
    const [barcodeId, , productId] = barcodeIds;
    setBarcode(barcodeId);
    setProduct(productId);
    const { isAttachedToCustomer } = await checkRegStatus(barcodeId);
    if (isAttachedToCustomer) {
      try {
        const { data: barcodedata } = await apiService(
          getBarcodeDetails(barcodeId),
          'get',
        );
        setBarcodeData(barcodedata);
        console.log('getBarcodeDetails', barcodedata);
        setPage(2);
        setSpinner(false);
      } catch (error: any) {
        console.log('onSuccess Err', error);
        Alert.alert('Error', error.message);
        setSpinner(false);
      }
    }
  };

  const handleSubmit = () => {
    if (comments !== '') {
      setIsLoading(true);
      apiService(postReportDevice, 'post', {
        faultName: comments,
        productId: product,
        barcodeId: barcode,
      })
        .then(({ message }) => {
          setIsLoading(false);
          navigation.navigate('success', { message });
        })
        .catch(error => {
          setIsLoading(false);
          Alert.alert('Error', error.message);
          console.log('FaultyDevice ERR', error);
        });
    } else {
      Alert.alert('No Message', 'Please include a message for this report.');
    }
  };

  return (
    <>
      <Spinner visible={spinner} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.backBtnBlock}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../assets/images/back2.png')}
            resizeMode="cover"
            style={styles.backImage}
          />
        </TouchableOpacity>
        <Text style={styles.page_title}>Faulty Device</Text>
        <Text style={styles.label}>
          Use the form below to report a faulty device.
        </Text>

        {page === 1 ? (
          <View>
            <QRCodeScanner
              fadeIn
              reactivate
              reactivateTimeout={60000}
              containerStyle={{ borderRadius: 30 }}
              cameraContainerStyle={{ borderRadius: 30 }}
              cameraStyle={styles.qrScanner}
              onRead={onSuccess}
            />
          </View>
        ) : (
          <>
            <View style={styles.infoBox}>
              <View style={styles.infoBoxLayer}>
                <Text style={styles.infoBoxTitle}>Barcode ID</Text>
                <Text style={styles.infoBoxLabel}>{barcodeData.id}</Text>
              </View>
              <View style={styles.infoBoxLayer}>
                <Text style={styles.infoBoxTitle}>Customer Name</Text>
                <Text style={styles.infoBoxLabel}>
                  {barcodeData.customer.customerName}
                </Text>
              </View>
              <View style={styles.infoBoxLayer}>
                <Text style={styles.infoBoxTitle}>Customer Location</Text>
                <Text style={styles.infoBoxLabel}>
                  {barcodeData.customer.address}
                </Text>
              </View>
              <View style={styles.infoBoxLayer}>
                <Text style={styles.infoBoxTitle}>Device Name</Text>
                <Text style={styles.infoBoxLabel}>
                  {barcodeData.product.productServiceName}
                </Text>
              </View>
              <View style={styles.infoBoxLayer}>
                <Text style={styles.infoBoxTitle}>Batch Number</Text>
                <Text style={styles.infoBoxLabel}>
                  {barcodeData.batch.batchNumber}
                </Text>
              </View>
            </View>
            <View style={styles.form}>
              <Text style={styles.selectLabel}>
                Please fill the form below to provide more information about
                this device.
              </Text>
              <TextInput
                placeholder="Any comments"
                multiline
                numberOfLines={6}
                value={comments}
                onChangeText={val => setComments(val)}
                style={styles.textarea}
              />
            </View>
            <Button
              title="Send Feedback"
              onPress={handleSubmit}
              isLoading={isLoading}
            />
          </>
        )}
      </ScrollView>
    </>
  );
};
export default FaultyDevice;
