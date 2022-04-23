import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateFeedback from '../screens/dashboard/CreateFeedback';
import FeedbackQuestions from '../screens/dashboard/Questions';
import FaultyDevice from '../screens/dashboard/FaultyDevice';
import RegisterDevice from '../screens/dashboard/RegisterDevice';
import Dashboard from '../screens/dashboard/Dashboard';
import Success from '../screens/dashboard/Success';

const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="dashboard"
    screenOptions={{ headerShown: false }}>
    <Stack.Screen name="dashboard" component={Dashboard} />
    <Stack.Screen name="feedback_create" component={CreateFeedback} />
    <Stack.Screen name="feedback_questions" component={FeedbackQuestions} />
    <Stack.Screen name="faulty_device" component={FaultyDevice} />
    <Stack.Screen name="register_device" component={RegisterDevice} />
    <Stack.Screen name="success" component={Success} />
  </Stack.Navigator>
);

export default HomeStack;
