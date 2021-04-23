import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../..';

export type Props = {
  route: RouteProp<RootStackParamList, 'Foods'>;
  navigation: StackNavigationProp<RootStackParamList>;
};
