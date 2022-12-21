import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Inter_400Regular,
  Inter_900Black,
  useFonts,
} from '@expo-google-fonts/inter';
import { styles } from './styles';
import { TaskCounter } from '../../components/TaskCounter';
import { Task } from '../../components/Task';

SplashScreen.preventAutoHideAsync();

interface TaskProps {
  id: number;
  text: string;
  checked: boolean;
}

export default function Home() {
  const [taskList, setTaskList] = useState<TaskProps[]>([]);
  const [taskValue, setTaskValue] = useState<string>('');
  const [createdTasks, setCreatedTasks] = useState(0);
  const [finishedTasks, setFinishedTasks] = useState(0);

  useEffect(() => {
    const numberOfTasksCompleted = taskList.reduce((sum = 0, task) => {
      if (task.checked) {
        return sum + 1;
      } else {
        return sum;
      }
    }, 0);

    setFinishedTasks(numberOfTasksCompleted);

    setCreatedTasks(taskList.length);
  }, [taskList]);

  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  function handleToggleTaskCompleted(id: number) {
    const taskToToggleCompleted = taskList.map((task) => {
      if (task.id === id) {
        task.checked = !task.checked;
      }
      return task;
    });

    setTaskList(taskToToggleCompleted);
  }

  function addNewTask() {
    setTaskList((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        text: taskValue,
        checked: false,
      },
    ]);
    setTaskValue('');
  }

  function deleteTask(id: number) {
    const taskToDelete = taskList.filter((task) => task.id !== id);
    console.log(taskList);

    setTaskList(taskToDelete);
  }

  return (
    <View
      style={styles.container}
      onLayout={onLayoutRootView}
    >
      <View style={styles.header}>
        <Image source={require('../../../assets/logo.png')} />
        <Text style={styles.title1}>To</Text>
        <Text style={styles.title2}>Do</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          value={taskValue}
          onChangeText={setTaskValue}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={addNewTask}
        >
          <Image source={require('../../../assets/plus.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.counterHeader}>
        <TaskCounter
          counter={createdTasks}
          titleColor="blue"
          type="Criadas"
        />
        <TaskCounter
          counter={finishedTasks}
          titleColor="purple"
          type="Concluídas"
        />
      </View>
      <View style={styles.tasksList}>
        <FlatList
          data={taskList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Task
              key={item.id}
              id={item.id}
              text={item.text}
              checked={item.checked}
              handleToggleCompleted={handleToggleTaskCompleted}
              onDeleteTask={deleteTask}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.listEmptyContainer}>
              <Image
                source={require('../../../assets/listEmpty.png')}
                style={styles.listEmptyImage}
              />
              <Text style={styles.listEmptyTitle}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.listEmptyText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
