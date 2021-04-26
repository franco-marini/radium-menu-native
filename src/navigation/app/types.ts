import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import RootStackParamList from '../types';

type AppStackParamList = {
  Foods: undefined;
};

export default AppStackParamList;

export type Props = {
  route: RouteProp<RootStackParamList, 'AppStack'>;
  navigation: StackNavigationProp<RootStackParamList>;
};
