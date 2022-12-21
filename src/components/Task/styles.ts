import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 12,
    height: 64,
    backgroundColor: '#262626',
    marginBottom: 8,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    color: '#FFFF',
    paddingHorizontal: 8,
    fontSize: 14,
    lineHeight: 20,
  },
  textCompleted: {
    flex: 1,
    color: '#808080',
    paddingHorizontal: 8,
    fontSize: 14,
    lineHeight: 20,
    textDecorationLine: 'line-through',
  },
});
