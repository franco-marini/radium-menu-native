import React, { FC, useCallback, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login';
import { Props } from './types';
import { getToken } from '../../utils/async-storage';

const AuthStack = createStackNavigator();

const Auth: FC<Props> = ({ navigation }: Props) => {
  const getUserToken = useCallback(async () => {
    try {
      const token = await getToken();
      if (token) navigation.navigate('AppStack');
    } catch (error) {
      console.warn('Async Storage error', error);
    }
  }, [navigation]);

  useEffect(() => {
    (async () => {
      await getUserToken();
    })();
  }, [getUserToken]);

  return (
    <AuthStack.Navigator initialRouteName='Login' headerMode='none'>
      <AuthStack.Screen name='Login' component={Login} />
    </AuthStack.Navigator>
  );
};

export default Auth;
