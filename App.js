import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TransactionComponent from './Components/TransactionComponent'
import SummaryComponent from './Components/SummaryComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TransactionContainer } from './Components/TransactionContainer';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <TransactionContainer>
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={{
        headerStyle: {
          backgroundColor: '#0077B6',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
          <Tab.Screen name="Transactions" component={TransactionComponent} options={{headerShown: false,
          tabBarIcon: () => (<Ionicons name="document-text-outline" size={24} color="black" />),}}/>
          <Tab.Screen name="Summary" component={SummaryComponent} options={{
          tabBarIcon: () => (<Ionicons name="information-circle-outline" size={24} color="black" />),}}/>
        </Tab.Navigator>
      </NavigationContainer>
    </TransactionContainer>
  );
}