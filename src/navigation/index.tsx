import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthStack from './auth';
import AuthStackParamList from './auth/types';

const RootStack = createStackNavigator();

const Root: FC = () => (
  <NavigationContainer>
    <RootStack.Navigator initialRouteName='AuthStack' mode='modal' headerMode='none'>
      <RootStack.Screen name='AuthStack' component={AuthStack} options={() => ({})} />
      <RootStack.Screen name='AppStack' component={AuthStack} options={() => ({})} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default Root;

export type RootStackParamList = {
  AuthStack?: { screen: string };
  AppStack: undefined;
} & AuthStackParamList;
