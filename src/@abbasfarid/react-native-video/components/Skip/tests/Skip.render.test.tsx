import React from 'react';

import { act, cleanup, fireEvent, render } from '@testing-library/react-native';

import { MockVideoProvider } from '../../../context';
import { Skip } from '../Skip';

const renderComponent = () =>
  render(<Skip direction="fast-forward" />, {
    wrapper: MockVideoProvider,
  });

describe('Behavior', () => {
  afterEach(cleanup);

  test('double tapping should animate', () => {
    const { getByRole, getByText } = renderComponent();
    const skipArea = getByRole('button');

    act(() => fireEvent.press(skipArea));
    act(() => fireEvent.press(skipArea));

    const seconds = getByText('5 sec');

    expect(seconds).toBeTruthy();
  });

  test('single tap should do nothing', () => {
    const { getByRole, queryByText } = renderComponent();
    const skipArea = getByRole('button');

    act(() => fireEvent.press(skipArea));

    const seconds = queryByText('5 sec');

    expect(seconds).toBeFalsy();
  });
});
