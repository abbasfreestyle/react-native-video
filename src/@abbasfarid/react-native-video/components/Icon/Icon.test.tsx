import React from 'react';

import { render } from '@testing-library/react-native';

import { SvgAssets, svgIcons } from './assets';
import { Icon } from './Icon';

// Automatic iteration over all Icons and taking snapshots
describe('Icon', () => {
  Object.keys(svgIcons).map((type) => {
    test(`matches the snapshot ${type}`, () => {
      const { toJSON } = render(<Icon type={type as SvgAssets} />);
      expect(toJSON()).toMatchSnapshot();
    });
    return null;
  });
});
