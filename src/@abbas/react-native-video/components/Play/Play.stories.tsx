import React from 'react';
import { Text } from 'react-native';

import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { Container } from '../../../../../storybook/helpers';

storiesOf('Components', module).add('Play Button', () => {
  return (
    <Container>
      <Text>{text('Text', 'Hello')}</Text>
    </Container>
  );
});
