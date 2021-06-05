import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
// import AppNavigator from './AppNavigator';
import AdminScreen from '../screens/AdminScreen';
import BidsScreen from '../screens/BidsScreen';

const Stack = createStackNavigator();
export default function AdminStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AdminScreen" component={AdminScreen} />  
      <Stack.Screen name="BidsScreen" component={BidsScreen} />
    
    </Stack.Navigator>
  );
}
