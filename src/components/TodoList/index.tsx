import React from 'react';
import {Circle, Container, ContainerIconAndTitle, Title} from './styles';
import {Checkbox} from '../CheckBox';
import Trash from 'react-native-vector-icons/Feather';
import {TextProps} from 'react-native';
interface CustomTitleProps extends TextProps {
  completed: boolean;
}

type Props = {
  title: string;
  completed: boolean;
  handleCompleted: (id: string) => void;
  handleDelete: (id: string) => void;
  id: string;
} & CustomTitleProps;

export function TodoList({
  title,
  completed,
  handleCompleted,
  id,
  handleDelete,
}: Props) {
  return (
    <Container>
      <ContainerIconAndTitle>
        <Checkbox onPress={() => handleCompleted(id)} visibleIcon={completed} />
        <Title completed={completed} numberOfLines={1}>
          {title}
        </Title>
      </ContainerIconAndTitle>
      <Circle
        onPress={() => {
          handleDelete(id);
        }}>
        <Trash size={18} color="#EE1F1F" name="trash" />
      </Circle>
    </Container>
  );
}
