import { useState } from 'react';
import { Text, View } from 'react-native';
import { TaskButton } from '../TaskButton';
import { TrashButton } from '../TrashButton';
import { styles } from './styles';

interface TaskProps {
  id: number;
  checked: boolean;
  text: string;
  handleToggleCompleted: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export function Task({
  id,
  checked,
  text,
  handleToggleCompleted,
  onDeleteTask,
}: TaskProps) {
  return (
    <View style={styles.container}>
      <TaskButton
        id={id}
        handleToggleCompleted={() => handleToggleCompleted(id)}
      />
      <Text style={checked ? styles.textCompleted : styles.text}>{text}</Text>
      <TrashButton
        taskId={id}
        onDeleteTask={onDeleteTask}
      />
    </View>
  );
}
