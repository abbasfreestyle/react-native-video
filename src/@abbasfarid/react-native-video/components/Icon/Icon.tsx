import React from 'react';

import { SvgProps } from 'react-native-svg';

import { SvgAssets, svgIcons } from './assets';

type Props = {
  size?: number;
  type: SvgAssets;
} & Omit<SvgProps, 'height' | 'width'>;

export const Icon = ({ size = 20, type, ...props }: Props) => {
  const SvgIcon = svgIcons[type];

  return <SvgIcon height={size} width={size} {...props} />;
};
