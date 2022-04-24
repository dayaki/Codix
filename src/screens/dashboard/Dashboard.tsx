import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { logout } from '../../appSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { styles } from '../styles';

const Dashboard = ({ navigation }) => {
  const { firstname } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <View>
          <Text style={styles.page_title}>Dashboard</Text>
          <Text style={styles.label}>
            Welcome back,{' '}
            <Text style={[styles.label, { fontWeight: 'bold' }]}>
              {firstname}
            </Text>
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.logoutBtn}
          onPress={() => dispatch(logout())}>
          <Image
            source={require('../../../assets/images/power.png')}
            resizeMode="cover"
            style={styles.logoutImg}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.btn}
        onPress={() => navigation.navigate('feedback_create')}>
        <Image
          source={require('../../../assets/images/feedback.png')}
          resizeMode="cover"
          style={styles.btnImage}
        />
        <View>
          <Text style={styles.btnText}>Create Feedback</Text>
          <Text style={styles.btnLabel}>Send feedback for a device</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.btn}
        onPress={() => navigation.navigate('faulty_device')}>
        <Image
          source={require('../../../assets/images/document.png')}
          resizeMode="cover"
          style={styles.btnImage}
        />
        <View>
          <Text style={styles.btnText}>Report Faulty Device</Text>
          <Text style={styles.btnLabel}>Scan and report a faulty device</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.btn}
        onPress={() => navigation.navigate('register_device')}>
        <Image
          source={require('../../../assets/images/cpu.png')}
          resizeMode="cover"
          style={styles.btnImage}
        />
        <View>
          <Text style={styles.btnText}>Register A Device</Text>
          <Text style={styles.btnLabel}>Register a new shiny device</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
