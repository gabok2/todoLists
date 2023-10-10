import styled from 'styled-components/native';
import {TextProps} from 'react-native';

interface CustomTitleProps extends TextProps {
  completed: boolean;
}
export const Container = styled.View`
  background-color: #fff;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  border: 1px solid gray;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerIconAndTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text<CustomTitleProps>`
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.completed ? '#D8D8D8' : '#000')};
  padding-left: 16px;
`;

export const Circle = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: #feecec;
  align-items: center;
  justify-content: center;
`;
