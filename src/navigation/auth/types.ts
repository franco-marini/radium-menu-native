import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '..';

type AuthStackParamList = {
  Login: undefined;
};

export default AuthStackParamList;

export type Props = {
  route: RouteProp<RootStackParamList, 'AuthStack'>;
  navigation: StackNavigationProp<RootStackParamList>;
};
