import React from 'react';
import {Container, Title} from './styles';
import {TouchableOpacityProps} from 'react-native';

interface Props extends TouchableOpacityProps {
  title: string;
  handlAddTask: () => void;
}

export function Button({title, handlAddTask, ...rest}: Props) {
  return (
    <Container onPress={handlAddTask} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
