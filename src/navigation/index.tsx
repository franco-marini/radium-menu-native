import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppStack from './app';
import AuthStack from './auth';

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
