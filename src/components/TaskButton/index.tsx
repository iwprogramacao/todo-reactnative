import { useState } from 'react';
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface TaskButtonProps {
  id: number;
  handleToggleCompleted: (id: number) => void;
}

export function TaskButton({ id, handleToggleCompleted }: TaskButtonProps) {
  const [image, setImage] = useState<ImageSourcePropType>(
    require('../../../assets/unchecked.png')
  );

  function handleCompleted() {
    handleToggleCompleted(id);
    handleToggleImage();
  }

  function handleToggleImage() {
    setImage((prevState) =>
      prevState === require('../../../assets/unchecked.png')
        ? require('../../../assets/checked.png')
        : require('../../../assets/unchecked.png')
    );
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleCompleted}
    >
      <Image source={image}></Image>
    </TouchableOpacity>
  );
}
