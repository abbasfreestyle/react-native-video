import React, { FC } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, TabbedViewOne } from '../screens';
import { RootStackParamList, RootTabsParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tabs = createBottomTabNavigator<RootTabsParamList>();

const TabbedViews = () => (
  <Tabs.Navigator
    screenOptions={{ header: () => null, tabBarIcon: () => null }}
    initialRouteName="Tabbed View One">
    <Tabs.Screen name="Tabbed View One" component={TabbedViewOne} />
  </Tabs.Navigator>
);

export const AppWithNavigator: FC = () => {
  return (
    <NavigationContainer<RootStackParamList>>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Tabbed Views" component={TabbedViews} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
