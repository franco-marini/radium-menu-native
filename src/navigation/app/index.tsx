import React, { FC } from 'react';
import { Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { useMutation } from '@apollo/client';

import Foods from './Foods';
import { Props } from './types';
import { signOut } from '../../graphql/mutations/auth';

const AppStack = createStackNavigator();

const App: FC<Props> = ({ navigation }: Props) => {
  const SIGN_OUT = signOut();
  const [signOutAction, { loading }] = useMutation(SIGN_OUT, {
    async onCompleted({ signOut }) {
      try {
        if (signOut.response) {
          navigation.navigate('AuthStack');
        }
      } catch (e) {
        console.warn('Oops! Something went wrong!', e.message);
      }
    },
    onError(error) {
      console.warn('Error', error);
      Alert.alert('Oops! Something went wrong!', error.message);
    },
  });

  return (
    <>
      <AppStack.Navigator initialRouteName='Foods' headerMode='none'>
        <AppStack.Screen name='Foods' component={Foods} />
      </AppStack.Navigator>
      <Button
        title='SIGN OUT'
        onPress={() => {
          signOutAction();
        }}
        loading={loading}
      />
    </>
  );
};

export default App;
