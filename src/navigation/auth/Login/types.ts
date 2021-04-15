import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../..';

export type Props = {
  route: RouteProp<RootStackParamList, 'Login'>;
  navigation: StackNavigationProp<RootStackParamList>;
};

export type Fields = {
  email: string;
  password: string;
};
