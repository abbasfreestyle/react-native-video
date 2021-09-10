import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { act, fireEvent, render } from '@testing-library/react-native';

import { Home } from './Home';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(() => ({ navigate: jest.fn() })),
}));

describe('Home Screen', () => {
  const cases = [['Scrolled View'], ['Tabbed View'], ['Storybook']];
  test.each(cases)('%s can navigate to the expected screen', async (button) => {
    const { getByText } = render(<Home />, {
      wrapper: NavigationContainer,
    });

    const btn = getByText(button);
    act(() => fireEvent.press(btn));

    expect(btn).toBeTruthy();
  });

  test('should match the snapshot', () => {
    const { toJSON } = render(<Home />, {
      wrapper: NavigationContainer,
    });

    expect(toJSON()).toMatchSnapshot();
  });
});
