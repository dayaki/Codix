import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RadioForm from 'react-native-simple-radio-button';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Button, Spinner } from '../../common';
import { styles } from '../styles';
import apiService from '../../utils/apiService';
import { checkRegStatus, getBarcode } from './utils';
import { getQuestions, postSubmitFeedback } from '../../utils/endpoints';
import { useAppSelector } from '../../hooks';
import { BarcodeData } from '../../utils/interfaces';

var radio_props = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
];

const CreateFeedback = ({ navigation }) => {
  const { userId } = useAppSelector(state => state.user);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [barcodeData, setBarcodeData] = useState<BarcodeData>();
  const [questions, setQuestions] = useState([]);
  const [comments, setComments] = useState('');
  const [checkBoxStatus, setCheckBoxStatus] = useState([]);

  const onSuccess = async ({ data: barcodeInfo }: { data: string }) => {
    setSpinner(true);
    const barcodeIds = barcodeInfo.split(' ');
    const [barcodeId, customerId, deviceId] = barcodeIds;
    const { isAttachedToCustomer } = await checkRegStatus(barcodeId);
    if (!isAttachedToCustomer) {
      setSpinner(false);
      Alert.alert('Error', 'This device is not registered yet.');
      navigation.navigate('dashboard');
    } else {
      const barcodeDetails = await getBarcode(barcodeId);
      setBarcodeData(barcodeDetails);
      console.log('barcodeDetails', barcodeDetails);
      const { data } = await apiService(getQuestions, 'get');
      setQuestions(data);
      console.log('questions', data);
      setPage(2);
      setSpinner(false);
      // console.log('barcodeDetails', barcodeDetails);
    }
  };

  const handleSubmit = async () => {
    if (checkBoxStatus.length === 0) {
      Alert.alert('Error', 'Please enter your responses.');
      return;
    }
    setIsLoading(true);
    const AnswerArrayStr = JSON.stringify(checkBoxStatus);
    const AnswerArrayObj = JSON.parse(AnswerArrayStr);

    const payload = {
      customerId: barcodeData?.customer.id,
      productDeviceId: barcodeData?.product.id,
      questions: AnswerArrayObj,
      otherComments: comments,
      salesAgentId: userId,
    };
    console.log('handleSubmit', payload);
    apiService(postSubmitFeedback, 'post', payload)
      .then(({ message }) => {
        // console.log('postSubmitFeedback', data);
        setIsLoading(false);
        navigation.navigate('success', { message });
      })
      .catch(errr => {
        Alert.alert('Error', errr.message);
        setIsLoading(false);
        console.log('postSubmitFeedback ERR', errr);
      });
  };

  return (
    <>
      <Spinner visible={spinner} />
      <KeyboardAwareScrollView enableOnAndroid style={styles.container}>
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
        <Text style={styles.page_title}>Give Feedback</Text>
        <Text style={styles.label}>
          Scan a QR code to provide feedback for the device.
        </Text>
        {page === 1 ? (
          <QRCodeScanner
            fadeIn
            reactivate
            reactivateTimeout={60000}
            cameraStyle={styles.qrScanner}
            onRead={onSuccess}
          />
        ) : (
          <>
            <View style={styles.questions}>
              <View style={styles.questionsWrap}>
                <Text style={styles.questionInfo}>
                  Please fill the form below by selecting an option between 1 to
                  5 for each question to provide more information for this
                  device.
                </Text>
              </View>
              {questions.map((question, index) => (
                <View style={styles.question} key={index}>
                  <Text style={styles.questionText}>
                    {question.questionWord}
                  </Text>
                  <RadioForm
                    radio_props={radio_props}
                    formHorizontal
                    buttonSize={16}
                    initial={8}
                    animation={false}
                    selectedButtonColor="#1B1C21"
                    radioStyle={styles.radioStyle}
                    labelStyle={styles.radioLabel}
                    buttonColor="#1B1C21"
                    labelColor="#1B1C21"
                    onPress={value => {
                      const answer = {
                        questionId: question.id,
                        answer: value,
                      };
                      setCheckBoxStatus([...checkBoxStatus, answer]);
                      console.info('answer >>> ', answer);
                      console.info('checkBoxStatus >>> ', checkBoxStatus);
                    }}
                  />
                </View>
              ))}
              <TextInput
                placeholder="Add comments"
                multiline
                numberOfLines={6}
                value={comments}
                onChangeText={val => setComments(val)}
                style={styles.textarea}
              />
              <Button
                title="Send Feedback"
                isLoading={isLoading}
                onPress={handleSubmit}
              />
            </View>
          </>
        )}
      </KeyboardAwareScrollView>
    </>
  );
};

export default CreateFeedback;
