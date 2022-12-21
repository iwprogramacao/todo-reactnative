import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    backgroundColor: '#0D0D0D',
    height: 150,
  },
  title1: {
    textTransform: 'lowercase',
    color: '#4EA8DE',
    fontFamily: 'Inter_900Black',
    fontSize: 42,
    marginLeft: 12,
  },
  title2: {
    textTransform: 'lowercase',
    color: '#5E60CE',
    fontFamily: 'Inter_900Black',
    fontSize: 42,
  },
  form: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    marginTop: -28,
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    borderRadius: 6,
    height: 56,
    marginRight: 8,
    paddingHorizontal: 16,
    fontSize: 18,
    color: '#F2F2F2',
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterHeader: {
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tasksList: {
    paddingHorizontal: 16,
  },
  listEmptyContainer: {
    marginTop: 8,
    borderTopColor: '#333333',
    borderTopWidth: 0.5,
    alignItems: 'center',
  },
  listEmptyImage: {
    marginTop: 48,
  },
  listEmptyTitle: {
    marginTop: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#808080',
    fontWeight: 'bold',
  },
  listEmptyText: {
    fontSize: 14,
    paddingHorizontal: 16,
    color: '#808080',
  },
});
