import React, { FC, useCallback, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useQuery } from '@apollo/client';

import { getToken, setToken } from '../../utils/async-storage';
import Login from './Login';
import { Props } from './types';
import { checkForeignToken } from '../../graphql/queries/auth';

const AuthStack = createStackNavigator();

const Auth: FC<Props> = ({ navigation }: Props) => {
  const CHECK_TOKEN = checkForeignToken();
  const { loading } = useQuery(CHECK_TOKEN, {
    async onCompleted({ checkForeignToken }) {
      try {
        if (checkForeignToken.token) {
          await setToken(checkForeignToken.token);
        }
      } catch (e) {
        console.warn('Oops! Something went wrong!', e.message);
      }
    },
  });

  const getUserToken = useCallback(async () => {
    try {
      const token = await getToken();
      if (token && !loading) navigation.navigate('AppStack');
    } catch (error) {
      console.warn('Async Storage error', error);
    }
  }, [navigation, loading]);

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
