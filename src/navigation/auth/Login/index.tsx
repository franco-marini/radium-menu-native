import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import React, { FC, useCallback } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { useMutation } from '@apollo/client';

import { Container, Form, StyledButton, Title, styles } from './styles';
import { Fields, Props } from './types';
import { login } from '../../../graphql/mutations/auth';
import { setToken } from '../../../utils/async-storage';
import theme from '../../../utils/theme';

const Login: FC<Props> = ({ navigation }: Props) => {
  const validationSchema = yup.object({
    email: yup.string().email('The email provided is not valid').required('Required'),
    password: yup.string().required('Required'),
  });

  const useYupValidationResolver = (validationSchema: any) =>
    useCallback(
      async data => {
        try {
          const values = await validationSchema.validate(data, {
            abortEarly: false,
          });

          return {
            values,
            errors: {},
          };
        } catch (errors) {
          return {
            values: {},
            errors: errors.inner.reduce(
              (allErrors: any, currentError: any) => ({
                ...allErrors,
                [currentError.path]: {
                  type: currentError.type ?? 'validation',
                  message: currentError.message,
                },
              }),
              {},
            ),
          };
        }
      },
      [validationSchema],
    );

  const resolver = useYupValidationResolver(validationSchema);
  const { control, handleSubmit, formState } = useForm<Fields>({
    mode: 'onBlur',
    resolver,
  });

  const { errors } = formState;
  const SIGN_IN = login({ schema: 'userToken, userRole' });
  const [signIn, { loading }] = useMutation(SIGN_IN, {
    async onCompleted({ signIn }) {
      try {
        if (signIn.userToken) {
          navigation.navigate('AppStack');
          await setToken(signIn.userToken);
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

  const onSubmit = ({ email, password }: Fields) => {
    signIn({ variables: { email: email.toLocaleLowerCase(), password } });
  };

  return (
    <Container>
      <Title>Login</Title>
      <Form>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              leftIcon={
                <Icon
                  name='user'
                  size={20}
                  color={
                    errors.email?.message ? theme.colors.red.default : theme.colors.gray.default
                  }
                />
              }
              placeholder='Email'
              onChangeText={value => onChange(value)}
              value={value}
              errorMessage={errors.email?.message}
              inputContainerStyle={errors.email?.message ? styles.errorInput : undefined}
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
              leftIcon={
                <Icon
                  name='lock'
                  size={20}
                  color={
                    errors.password?.message ? theme.colors.red.default : theme.colors.gray.default
                  }
                />
              }
              errorMessage={errors.password?.message}
              inputContainerStyle={errors.password?.message ? styles.errorInput : undefined}
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
          onPress={handleSubmit(onSubmit)}
          containerStyle={styles.buttonContainerStyle}
          loading={loading}
        />
      </Form>
    </Container>
  );
};

export default Login;
