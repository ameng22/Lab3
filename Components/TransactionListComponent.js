import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './Styles';
import { TransactionsContext } from './TransactionContainer';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const TransactionListComponent = ({ navigation }) => {
  const { transactionsData } = useContext(TransactionsContext);

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
      style={styles.listItemContainer}
    >
      <Text style={styles.itemName}>{item.name}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.itemPrice}>{item.amount}</Text>
        <Icon name="chevron-circle-right" size={20} color="#0077B6" style={{ marginLeft: 10 }} />
      </View>
    </TouchableOpacity>
  );

  const renderSeparator = () => <View style={styles.listItemSeparator} />;

  return (
    <View>
      <FlatList
        data={transactionsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default TransactionListComponent;
