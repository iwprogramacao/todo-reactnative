import { Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface TrashButtonProps {
  taskId: number;
  onDeleteTask: (id: number) => void;
}

export function TrashButton({ taskId, onDeleteTask }: TrashButtonProps) {
  function handleDeleteTask() {
    onDeleteTask(taskId);
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleDeleteTask}
    >
      <Image source={require('../../../assets/trash.png')}></Image>
    </TouchableOpacity>
  );
}
