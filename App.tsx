import React from 'react';
import {View} from 'react-native';
import {Todo} from './src/components/Todo/index';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Todo />
    </View>
  );
}
