import React, { FC } from 'react';

import { Container, Title } from './styles';
import { Props } from './types';

const Foods: FC<Props> = () => {
  const example = 'This is an example';
  return (
    <Container>
      <Title>Foods</Title>
      <Title>{example}</Title>
    </Container>
  );
};

export default Foods;
