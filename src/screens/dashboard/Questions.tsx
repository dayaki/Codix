import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import { Button, Header } from '../../common';
import { feedbackStyles as styles } from './styles';

const FeedbackQuestions = ({ navigation, route }) => {
  const [comments, setComments] = useState('');
  //   const { questions, barcodeData, barcodeId } = route.params;
  const handleSubmit = () => {};
  var radio_props = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
  ];
  return (
    <>
      <Header title="Feedback Questions" goBack />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {/* <Text style={styles.title}>Feedback Questions</Text> */}
        <View style={styles.question_header}>
          <View style={styles.feedback_data}>
            <Text style={styles.feedback_title}>Barcode ID</Text>
            <Text style={styles.feedback_label}>791811171717171</Text>
          </View>
          <View style={styles.feedback_data}>
            <Text style={styles.feedback_title}>Customer Name</Text>
            <Text style={styles.feedback_label}>Dayo Akins</Text>
          </View>
          <View style={styles.feedback_data}>
            <Text style={styles.feedback_title}>Customer Location</Text>
            <Text style={styles.feedback_label}>Lagos, Nigeria</Text>
          </View>
          <View style={styles.feedback_data}>
            <Text style={styles.feedback_title}>Device Name</Text>
            <Text style={styles.feedback_label}>Lagos, Nigeria</Text>
          </View>
          <View style={styles.feedback_data}>
            <Text style={styles.feedback_title}>Batch Number</Text>
            <Text style={styles.feedback_label}>Lagos, Nigeria</Text>
          </View>
          <View style={styles.feedback_data}>
            <Text style={styles.feedback_title}>Device Id</Text>
            <Text style={styles.feedback_label}>Lagos, Nigeria</Text>
          </View>
        </View>
        <View style={styles.questions}>
          <Text style={styles.questionInfo}>
            Please fill the form below to by selecting an option between 1 to 5
            for each question to provide more information for this device.
          </Text>
          <View style={styles.question}>
            <Text style={styles.questionText}>
              lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eius
              consectetur fuga sint nulla repellendus.
            </Text>
            {/* <RadioForm formHorizontal={true} animation={true}>
              {radio_props.map((obj, i) => (
                <RadioButton labelHorizontal={true} key={i}>
                  <RadioButtonLabel
                    obj={obj}
                    index={i}
                    labelHorizontal={true}
                    labelWrapStyle={{}}
                  />
                  <RadioButtonInput
                    obj={obj}
                    index={i}
                    onPress={elv => console.log('onpress', elv)}
                    borderWidth={1}
                    buttonInnerColor={'blue'}
                    buttonOuterColor={'red'}
                    buttonSize={10}
                    buttonOuterSize={20}
                    buttonStyle={{ backgroundColor: 'yellow' }}
                    buttonWrapStyle={{ marginLeft: 6 }}
                  />
                </RadioButton>
              ))}
            </RadioForm> */}
            {/* <RadioForm
              formHorizontal={true}
              animation={true}
              labelHorizontal={true}
              radio_props={radio_props}
              onPress={value => console.log('value', value)}
            /> */}
          </View>
          <TextInput
            placeholder="Any comments"
            multiline
            numberOfLines={5}
            value={comments}
            onChangeText={val => setComments(val)}
            style={styles.textarea}
          />
          <Button title="Send Feedback" onPress={handleSubmit} />
        </View>
      </ScrollView>
    </>
  );
};

export default FeedbackQuestions;
