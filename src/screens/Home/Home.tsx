import React from 'react';
import { Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { NavigationProps } from '../../navigation/types';

export const Home = () => {
  const navigation = useNavigation<NavigationProps<'Home'>>();

  return (
    <>
      <Button
        onPress={() => navigation.navigate('Scrolled View')}
        title="Scrolled View"
      />
      <Button
        onPress={() => navigation.navigate('Tabbed Views')}
        title="Tabbed Views"
      />
      <Button
        onPress={() => navigation.navigate('Storybook')}
        title="Storybook"
      />
    </>
  );
};
