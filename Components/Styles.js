// styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#0077B6',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0077B6',
  },
  listItemSeparator: {
    height: 1,
    backgroundColor: '#0077B6',
  },
});
