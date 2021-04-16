import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import theme from '../../../utils/theme';

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  padding: 20px;
  background-color: ${theme.colors.white.default};
`;

export const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  color: ${theme.colors.black.default};
`;

export const Form = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  width: 100%;
`;

export const styles = StyleSheet.create({
  buttonContainerStyle: {
    marginTop: 20,
    width: '100%',
  },
  errorInput: {
    borderColor: theme.colors.red.default,
  },
});
