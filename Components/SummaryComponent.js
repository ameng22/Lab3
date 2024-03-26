import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { TransactionsContext } from './TransactionContainer';

const SummaryComponent = () => {
  const { transactionsData } = useContext(TransactionsContext);

  if (!transactionsData || !Array.isArray(transactionsData)) {
    return <Text>No transactions data available.</Text>;
  }

  const highestTransaction = Math.max(...transactionsData.map((t) => parseFloat(t.amount.replace('$', ''))));
  const lowestTransaction = Math.min(...transactionsData.map((t) => parseFloat(t.amount.replace('$', ''))));

  const highSpending = transactionsData.find(t => parseFloat(t.amount.replace('$', '')) === highestTransaction);
  const lowSpending = transactionsData.find(t => parseFloat(t.amount.replace('$', '')) === lowestTransaction);

  const summaryData = [
    { title: 'Transactions', value: transactionsData.length },
    { title: 'Balance', value: `$${transactionsData.reduce((acc, curr) => acc + parseFloat(curr.amount.replace('$', '')), 0).toFixed(2)}` },
    { title: 'High Spending', transaction: highSpending.name, amount: highestTransaction },
    { title: 'Low Spending', transaction: lowSpending.name, amount: lowestTransaction },
  ];

  const renderItem = ({ item }) => {
    if (item.title === 'High Spending' || item.title === 'Low Spending') {
      return (
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{item.title}</Text>
          <View style={styles.transactionContainer}>
            <Text style={styles.transactionName}>{item.transaction}</Text>
            <Text style={styles.transactionAmount}>${item.amount}</Text>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.value}>{item.value}</Text>
      </View>
    );
  };

  const renderSeparator = () => (
    <View style={styles.separator} />
  );

  return (
    <FlatList
      data={summaryData}
      renderItem={renderItem}
      ItemSeparatorComponent={renderSeparator}
      keyExtractor={(item) => item.title}
      style={{ padding: 16 }}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  sectionContainer: {
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#023E8A', 
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    color: '#023E8A', 
  },
  transactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionName: {
    fontSize: 16,
  },
  transactionAmount: {
    fontSize: 16,
    color: '#023E8A',
  },
  separator: {
    height: 1,
    backgroundColor: '#023E8A', 
    marginVertical: 5,
  },
});

export default SummaryComponent;
