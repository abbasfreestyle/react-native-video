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
    screenOptions={{ header: () => null, tabBarIcon: () => null }}
    initialRouteName="Tab One"
  >
    <Tabs.Screen name="Tab One" component={TabOne} />
    <Tabs.Screen name="Tab Two" component={TabTwo} />
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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Scrolled View" component={ScrolledView} />
        <Stack.Screen name="Tabbed Views" component={TabbedViews} />
        <Stack.Screen name="Storybook" component={StorybookUI} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
