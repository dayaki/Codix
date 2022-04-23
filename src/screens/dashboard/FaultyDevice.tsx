import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from '../../common';
import { feedbackStyles as styles } from './styles';

const FaultyDevice = ({ navigation }) => {
  const [comments, setComments] = useState('');

  const handleSubmit = () => {};
  return (
    <View>
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
  );
};
export default FaultyDevice;
