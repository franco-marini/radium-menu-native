import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login';

const AuthStack = createStackNavigator();

const Auth: FC = () => (
  <AuthStack.Navigator initialRouteName='Login' headerMode='none'>
    <AuthStack.Screen name='Login' component={Login} />
  </AuthStack.Navigator>
);

export default Auth;
