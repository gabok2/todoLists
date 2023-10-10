import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 16px 0px;
  align-items: center;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: 700;
  color: #333;
`;

export const CountTasks = styled.Text`
  padding-top: 16px;
  font-size: 16px;
  font-weight: 400;
  color: #72737b;
  padding-bottom: 16px;
`;

export const ContainerFlatList = styled.View`
  width: 100%;
  flex: 1;
  padding: 0px 32px;
`;

export const Divider = styled.View`
  height: 1px;
  background-color: #dbdbdb;
  width: 100%;
  margin-bottom: 16px;
`;

export const ContainerFooter = styled.View`
  flex-direction: column;
  width: 100%;
  padding: 0px 32px;
`;

export const ContainerInput = styled.View`
  border: 1px solid #5438dc;
  flex-direction: column;
  border-radius: 8px;
  padding: 0px 16px;
  width: 100%;

  flex-direction: row;
`;
