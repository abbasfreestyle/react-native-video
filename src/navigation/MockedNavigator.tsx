import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StorybookUI } from '../../storybook';
import { Home, ScrolledView, TabOne, TabTwo } from '../screens';
import { RootStackParamList, RootTabsParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Tabs = createBottomTabNavigator<RootTabsParamList>();

const TabbedViews = () => (
  <Tabs.Navigator
    initialRouteName="Tab One"
    screenOptions={{ header: () => null, tabBarIcon: () => null }}
  >
    <Tabs.Screen component={TabOne} name="Tab One" />
    <Tabs.Screen component={TabTwo} name="Tab Two" />
  </Tabs.Navigator>
);

export const MockedNavigator = ({
  initialRoute,
}: {
  initialRoute: keyof RootStackParamList;
}) => {
  return (
    <NavigationContainer<RootStackParamList> independent>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={ScrolledView} name="Scrolled View" />
        <Stack.Screen component={TabbedViews} name="Tabbed Views" />
        <Stack.Screen component={StorybookUI} name="Storybook" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
