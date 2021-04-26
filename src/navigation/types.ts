import AppStackParamList from './app/types';
import AuthStackParamList from './auth/types';

type RootStackParamList = {
  Root: undefined;
  AuthStack?: { screen: string };
  AppStack?: { screen: string };
} & AuthStackParamList &
  AppStackParamList;

export default RootStackParamList;
