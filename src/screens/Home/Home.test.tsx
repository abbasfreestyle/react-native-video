import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';

import { Home } from './Home';

describe('Home Screen', () => {
  test('renders correctly', async () => {
    const { getByText } = render(<Home />, {
      wrapper: NavigationContainer,
    });

    const stepOne = await getByText('Storybook');
    expect(stepOne).toBeTruthy();
  });
});
