import React from 'react';

import { render } from '@testing-library/react-native';

import { Home } from '../src/screens/Home';

test('renders correctly', () => {
  const { getByText } = render(<Home />);
  const stepOne = getByText('Step One');
  expect(stepOne).toBeTruthy();
});
