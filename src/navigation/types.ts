import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  'Scrolled View': undefined;
  'Tabbed Views': undefined;
};

export type RootTabsParamList = {
  'Tab One': undefined;
  'Tab Two': undefined;
};

export type NavigationProps<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;
