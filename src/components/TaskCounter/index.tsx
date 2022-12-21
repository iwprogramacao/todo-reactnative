import { Text, View } from 'react-native';
import { styles } from './styles';

interface TaskCounterProps {
  type: string;
  counter: number;
  titleColor: 'blue' | 'purple';
}

export function TaskCounter({ type, counter, titleColor }: TaskCounterProps) {
  return (
    <View style={styles.container}>
      <Text style={styles[titleColor]}>{type}</Text>
      <Text style={styles.counter}>{counter}</Text>
    </View>
  );
}
