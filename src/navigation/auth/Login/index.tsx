import { Controller, useForm } from 'react-hook-form';
import React, { FC } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { useMutation } from '@apollo/client';

import { Container, Form, StyledButton, Title, styles } from './styles';
import { Fields, Props } from './types';
import { login } from '../../../graphql/mutations/auth';

const Login: FC<Props> = ({ navigation }: Props) => {
  const { control, handleSubmit, formState } = useForm<Fields>({
    mode: 'onChange',
  });

  const SIGN_IN = login({ schema: 'userToken' });
  const [signIn, { loading }] = useMutation(SIGN_IN, {
    onCompleted({ signIn }) {
      if (signIn.userToken) {
        navigation.navigate('AppStack');
      }
    },
    onError(error) {
      Alert.alert('Oops! Something went wrong!', error.message);
    },
  });

  const onSubmit = ({ email, password }: Fields) => {
    signIn({ variables: { email, password } });
  };

  return (
    <Container>
      <Title>Login</Title>
      <Form>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              leftIcon={<Icon name='user' size={20} color='gray' />}
              placeholder='Email'
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name='email'
          rules={{
            required: true,
          }}
          defaultValue=''
        />
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder='Password'
              onChangeText={value => onChange(value)}
              value={value}
              leftIcon={<Icon name='lock' size={20} color='gray' />}
              secureTextEntry
            />
          )}
          name='password'
          rules={{
            required: true,
          }}
          defaultValue=''
        />
        <StyledButton
          title='Sign In'
          disabled={!formState.isValid}
          onPress={handleSubmit(onSubmit)}
          containerStyle={styles.buttonContainerStyle}
          loading={loading}
        />
      </Form>
    </Container>
  );
};

export default Login;
