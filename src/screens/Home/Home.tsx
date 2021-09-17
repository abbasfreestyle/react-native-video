import React from 'react';
import { Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { NavigationProps } from '../../navigation/types';

export const Home = () => {
  const navigation = useNavigation<NavigationProps<'Home'>>();

  return (
    <>
      <Button
        title="Scrolled View"
        onPress={() => navigation.navigate('Scrolled View')}
      />
      <Button
        title="Tabbed Views"
        onPress={() => navigation.navigate('Tabbed Views')}
      />
      <Button
        title="Storybook"
        onPress={() => navigation.navigate('Storybook')}
      />
    </>
  );
};
