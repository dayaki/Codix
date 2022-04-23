import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../appSlice';
import { Button } from '../../common';
import apiService from '../../utils/apiService';
import { postLogin } from '../../utils/endpoints';
import { styles } from './styles';

const Login = () => {
  const [email, setEmail] = useState('anenetemocu@gmail.com');
  const [password, setPassword] = useState('Nigeria2011!');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const loginUser = () => {
    setIsLoading(true);
    apiService(postLogin, 'post', {
      email,
      password,
    })
      .then(({ data }) => {
        console.log('login user', data);
        dispatch(userLogin(data));
        setIsLoading(false);
      })
      .catch(err => {
        console.log('login err', err);
        setIsLoading(false);
      });
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/bg.png')}
      resizeMode="cover"
      style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images/wragby.png')}
          resizeMode="cover"
          style={styles.logo}
        />
        <Text style={styles.appName}>Xidoc Feedback</Text>
      </View>
      <KeyboardAwareScrollView enableOnAndroid={true} style={styles.scroll}>
        <Text style={styles.loginText}>Login</Text>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={email}
            onChangeText={em => setEmail(em)}
            placeholder="Email address"
            keyboardType="email-address"
            style={styles.input}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            value={password}
            onChangeText={pass => setPassword(pass)}
            placeholder="**********"
            keyboardType="default"
            secureTextEntry
            style={styles.input}
          />
        </View>
        <Text style={styles.forgotPass}>Forgot password?</Text>
        <Button title="Login" onPress={loginUser} isLoading={isLoading} />
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default Login;
