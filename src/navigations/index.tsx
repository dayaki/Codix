import React from 'react';
import { useAppSelector } from '../hooks';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

const Router = () => {
  const { userId } = useAppSelector(state => state.user);
  return userId ? <HomeStack /> : <AuthStack />;
};

export default Router;
