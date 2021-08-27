import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  'Tabbed Views': undefined;
};

export type RootTabsParamList = {
  'Tabbed View One': undefined;
};

export type NavigationProps<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;
