import React, { FC } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, ScrolledView, TabOne, TabTwo } from '../screens';
import { RootStackParamList, RootTabsParamList } from './types';

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
});

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tabs = createBottomTabNavigator<RootTabsParamList>();

const TabbedViews = () => (
  <Tabs.Navigator
    screenOptions={{ header: () => null, tabBarIcon: () => null }}
    initialRouteName="Tab One">
    <Tabs.Screen name="Tab One" component={TabOne} />
    <Tabs.Screen name="Tab Two" component={TabTwo} />
  </Tabs.Navigator>
);

export const AppWithNavigator: FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer<RootStackParamList>>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Scrolled View" component={ScrolledView} />
          <Stack.Screen name="Tabbed Views" component={TabbedViews} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
