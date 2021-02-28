import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import TabNavigator from './TabNavigator';
import OnBoardingStack from './OnBoardingStack'
const Stack = createStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="SplashScreen" component={SplashScreen} />  */}
      {/* <Stack.Screen name="OnBoardingStack" component={OnBoardingStack} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} /> */}
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
};
export default AuthNavigation;