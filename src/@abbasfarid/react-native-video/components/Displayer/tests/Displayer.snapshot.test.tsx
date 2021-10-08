import React from 'react';

import { render } from '@testing-library/react-native';

import { MockVideoProvider } from '../../../context';
import { Play } from '../../Play';
import { Displayer } from '../Displayer';

const renderTestComponent = () =>
  render(renderComponent(), { wrapper: MockVideoProvider });

const renderComponent = () => (
  <Displayer>
    <Play />
  </Displayer>
);

test('displayer should match the snapshot', () => {
  const { toJSON } = renderTestComponent();
  expect(toJSON()).toMatchSnapshot();
});
