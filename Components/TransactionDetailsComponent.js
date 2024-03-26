import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionDetailsComponent = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      {/* Section for Transaction Name, Amount, and Loc */}
      <View style={styles.section}>
        <Text style={styles.amount}>{transaction.amount}</Text>
        <Text>{transaction.name}</Text>
        <Text>{transaction.loc}</Text>
      </View>

      {/* Section for Transaction Date */}
      <View style={styles.dateSection}>
        <Text style={styles.label}>Transaction Date:</Text>
        <Text>{transaction.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  dateSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontWeight: 'bold',
    marginRight: 8,
  },
});

export default TransactionDetailsComponent;
