import { SafeAreaView } from 'react-native-safe-area-context';
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
