import React, {useState} from 'react';
import {
  Container,
  ContainerFlatList,
  ContainerFooter,
  ContainerInput,
  CountTasks,
  Divider,
  Title,
} from './styles';
import {FlatList, Keyboard, TextInput} from 'react-native';
import {Button} from '../Button';
import {TodoList} from '../TodoList';

type Props = {
  id: string;
  title: string;
  completed: boolean;
};
export function Todo() {
  const [title, setTitle] = useState('');

  const [data, setData] = useState<Props[]>([]);

  const handlAddTask = () => {
    const newTask = {
      id: String(data.length + 1),
      title,
      completed: false,
    };
    setData(prevData => [...prevData, newTask]);
    Keyboard.dismiss();
    setTitle('');
  };

  const handleCompleted = (id: string) => {
    const updatedData = data.map(item => {
      if (item.id === id) {
        return {...item, completed: !item.completed};
      }
      return item;
    });
    setData(updatedData);
  };

  const handleDelete = (id: string) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  };

  let countTodo = data.filter(item => item.completed).length;

  return (
    <Container>
      <Title>Todays Tasks</Title>
      <CountTasks>{`(${countTodo}/${data.length}) Completed Tasks`}</CountTasks>
      <ContainerFlatList>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TodoList
              id={item.id}
              title={item.title}
              completed={item.completed}
              handleCompleted={() => handleCompleted(item.id)}
              handleDelete={() => handleDelete(item.id)}
            />
          )}
        />
      </ContainerFlatList>
      <Divider />
      <ContainerFooter>
        <ContainerInput>
          <TextInput
            style={{flex: 1}}
            placeholder="Add a new task"
            placeholderTextColor="#000000"
            returnKeyType="done"
            value={title}
            onChangeText={setTitle}
            onSubmitEditing={handlAddTask}
          />
        </ContainerInput>
        <Button handlAddTask={handlAddTask} title="Add Task" />
      </ContainerFooter>
    </Container>
  );
}
