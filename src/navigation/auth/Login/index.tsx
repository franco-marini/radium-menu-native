import { Controller, useForm } from 'react-hook-form';
import React, { FC, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import { Container, Form, StyledButton, Title, styles } from './styles';
import { Fields, Props } from './types';

const Login: FC<Props> = ({ navigation }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { control, handleSubmit, formState } = useForm<Fields>({
    mode: 'onChange',
  });

  const onSubmit = ({ email, password }: Fields) => {
    setEmail(email);
    setPassword(password);
    navigation.navigate('AppStack');
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
          defaultValue={email || ''}
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
          defaultValue={password || ''}
        />
        <StyledButton
          title='Sign In'
          disabled={!formState.isValid}
          onPress={handleSubmit(onSubmit)}
          containerStyle={styles.buttonContainerStyle}
        />
      </Form>
    </Container>
  );
};

export default Login;
