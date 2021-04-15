import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
`;

export const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  color: #000000;
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
});
