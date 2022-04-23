import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Alert,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { Header, Spinner } from '../../common';
import { styles } from '../styles';
import apiService from '../../utils/apiService';
import { checkRegStatus, getBarcode } from './utils';
import { getQuestions, putCustomerAttachment } from '../../utils/endpoints';

const CreateFeedback = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [barcodeData, setBarcodeData] = useState(null);

  const onSuccess = async ({
    barcodeInfo,
  }: {
    dabarcodeInfota: string;
    rawData: string;
  }) => {
    setIsLoading(true);
    const barcodeIds = barcodeInfo.split(' ');
    const [barcodeId, customerId, deviceId] = barcodeIds;
    const { isAttachedToCustomer } = await checkRegStatus(barcodeId);
    if (!isAttachedToCustomer) {
      setIsLoading(false);
      Alert.alert('Error', 'This device is not registered yet.');
      navigation.navigate('dashboard');
    } else {
      const barcodeDetails = await getBarcode(barcodeId);
      setBarcodeData(barcodeDetails);
      apiService(getQuestions, 'get').then(({ data }) => {
        console.log('questions', data);
      });
      setIsLoading(false);
      // console.log('barcodeDetails', barcodeDetails);
    }

    // setIsLoading(false);
    //     bounds: Object
    // height: 1440
    // origin: Array(4)
    // width: 1920
    // __proto__: Object
    // data: "404c5b6a-8477-4031-90da-df067be211a0"
    // rawData: "42434303463356236612d383437372d343033312d393064612d6466303637626532313161300ec11ec11ec11ec11ec11"
    // target: 2747
    // type: "QR_CODE"
    // console.log('qrcode success', data);
  };
  return (
    <>
      {/* <Spinner visible={true} /> */}
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.backBtn}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../assets/images/back2.png')}
            resizeMode="cover"
            style={styles.backImage}
          />
        </TouchableOpacity>
        <Text style={styles.page_title}>Give Feedback</Text>
        <Text style={styles.label}>
          Scan a QR code to provide feedback for the device.
        </Text>
        <QRCodeScanner
          fadeIn
          reactivate
          reactivateTimeout={60000}
          cameraStyle={styles.qrScanner}
          onRead={onSuccess}
        />
      </View>
    </>
  );
};

// bottomContent={
//   <TouchableOpacity style={styles.btn}>
//     <Text style={styles.btnText}>OK. Got it!</Text>
//   </TouchableOpacity>
// }

export default CreateFeedback;
