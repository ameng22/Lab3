import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionListComponent from './TransactionListComponent';
import TransactionDetailsComponent from './TransactionDetailsComponent';

const Stack = createStackNavigator();

const TransactionComponent = () => {
  return (
    <Stack.Navigator 
      initialRouteName="TransactionsList"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0077B6',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="TransactionsList" component={TransactionListComponent} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetailsComponent} />
    </Stack.Navigator>
  );
};

export default TransactionComponent;
