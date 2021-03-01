import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfile from '../screens/EditProfile';
import MyProductsScreen from '../screens/MyProductsScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import About from "../screens/About";
const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="MyProductsScreen" component={MyProductsScreen} />
      <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen}/>
      <Stack.Screen name="About" component={About} />
 


    </Stack.Navigator>
  );
}
