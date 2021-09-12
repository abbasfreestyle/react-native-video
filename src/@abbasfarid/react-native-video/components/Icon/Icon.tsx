import React from 'react';

import { SvgProps } from 'react-native-svg';

import { SvgAssets, svgIcons } from './assets';

interface Props extends Omit<SvgProps, 'height' | 'width'> {
  size?: number;
  type: SvgAssets;
}

export const Icon = ({ size = 20, type, ...props }: Props) => {
  const SvgIcon = svgIcons[type];

  return <SvgIcon height={size} width={size} {...props} />;
};
