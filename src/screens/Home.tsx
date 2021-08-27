import React, { FC } from 'react';
import { Button, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { NavigationProps } from '../navigation/types';

export const Home: FC = () => {
  const navigation = useNavigation<NavigationProps<'Home'>>();

  return (
    <SafeAreaView>
      <Button
        title="Tabbed View"
        onPress={() => navigation.navigate('Tabbed Views')}
      />
    </SafeAreaView>
  );
};
