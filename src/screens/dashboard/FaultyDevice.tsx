import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Spinner } from '../../common';
import apiService from '../../utils/apiService';
import { getBarcodeDetails, postReportDevice } from '../../utils/endpoints';
import { styles } from '../styles';
import { checkRegStatus } from './utils';
import { BarcodeInterface } from '../../utils/interfaces';

const FaultyDevice = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [page, setPage] = useState(1);
  const [barcode, setBarcode] = useState('');
  const [barcodeData, setBarcodeData] = useState<BarcodeInterface>({
    id: '7881',
    customer: {
      customerName: '',
      address: '',
    },
    product: {
      id: '',
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
    const [barcodeId] = barcodeIds;
    setBarcode(barcodeId);
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
    } else {
      Alert.alert('Error', 'This device is not registered yet.');
      navigation.navigate('dashboard');
    }
  };

  const handleSubmit = () => {
    if (comments !== '') {
      setIsLoading(true);
      const payload = {
        faultName: comments,
        productId: barcodeData.product.id,
        barcodeId: barcode,
      };
      console.log('handleSubmit', payload);
      apiService(postReportDevice, 'post', payload)
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
      <KeyboardAwareScrollView
        enableOnAndroid
        showsVerticalScrollIndicator={false}
        style={styles.container}>
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
      </KeyboardAwareScrollView>
    </>
  );
};
export default FaultyDevice;
