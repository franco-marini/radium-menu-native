import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppStack from './app';
import AppStackParamList from './app/types';
import AuthStack from './auth';
import AuthStackParamList from './auth/types';

const RootStack = createStackNavigator();

const Root: FC = () => (
  <NavigationContainer>
    <RootStack.Navigator initialRouteName='AuthStack' mode='modal' headerMode='none'>
      <RootStack.Screen name='AuthStack' component={AuthStack} options={() => ({})} />
      <RootStack.Screen name='AppStack' component={AppStack} options={() => ({})} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default Root;

export type RootStackParamList = {
  AuthStack?: { screen: string };
  AppStack?: { screen: string };
} & AuthStackParamList &
  AppStackParamList;
