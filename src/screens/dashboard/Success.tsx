import React from 'react';
import { View, Image, Text } from 'react-native';
import { Button } from '../../common';
import { styles } from '../styles';

const Success = ({ navigation, route }) => {
  const { message } = route.params || null;
  return (
    <View style={styles.container}>
      {/* <Text style={styles.page_title}>Register Device</Text> */}
      <Image
        source={require('../../../assets/images/check.png')}
        resizeMode="cover"
        style={styles.successImg}
      />
      <Text style={styles.successTitle}>
        {message ? message : 'Successful Operation'}
      </Text>
      <Button
        style={styles.successBtn}
        title="Continue"
        onPress={() => navigation.navigate('dashboard')}
      />
    </View>
  );
};

export default Success;
