import React, { FC } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StorybookUI } from '../../storybook';
import { Home, ScrolledView, TabOne, TabTwo } from '../screens';
import { RootStackParamList, RootTabsParamList } from './types';

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
});

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

export const AppWithNavigator: FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer<RootStackParamList>>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen component={Home} name="Home" />
          <Stack.Screen component={ScrolledView} name="Scrolled View" />
          <Stack.Screen component={TabbedViews} name="Tabbed Views" />
          <Stack.Screen component={StorybookUI} name="Storybook" />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
