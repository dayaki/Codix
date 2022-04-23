import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { logout } from '../../appSlice';
import { useAppDispatch } from '../../hooks';
import { styles } from '../styles';

const Dashboard = ({ navigation }) => {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.page_title}>Dashboard</Text>
      <Text style={styles.label}>Start your journey here.</Text>

      <View style={styles.actions}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.btn}
          onPress={() => navigation.navigate('feedback_create')}>
          <Image
            source={require('../../../assets/images/sendFeedback.png')}
            resizeMode="cover"
            style={styles.btnImage}
          />
          <Text style={styles.btnText}>Create Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.btn}
          onPress={() => navigation.navigate('feedback_questions')}>
          <Image
            source={require('../../../assets/images/faulty.png')}
            resizeMode="cover"
            style={styles.btnImage}
          />
          <Text style={styles.btnText}>Report Faulty Device</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.btn}
          onPress={() => navigation.navigate('register_device')}>
          <Image
            source={require('../../../assets/images/regnew.png')}
            resizeMode="cover"
            style={styles.btnImage}
          />
          <Text style={styles.btnText}>Register A Device</Text>
        </TouchableOpacity>
      </View>

      <Text onPress={() => dispatch(logout())}>Logout</Text>
    </View>
  );
};

export default Dashboard;
