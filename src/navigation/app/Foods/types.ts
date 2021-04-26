import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import RootStackParamList from '../../types';

export type Props = {
  route: RouteProp<RootStackParamList, 'Foods'>;
  navigation: StackNavigationProp<RootStackParamList>;
};
