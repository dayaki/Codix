import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/authentication';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator
    initialRouteName="login"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="login" component={Login} />
  </Stack.Navigator>
);

export default AuthStack;
