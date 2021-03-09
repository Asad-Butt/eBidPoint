import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideMenuScreen from '../screens/SideMenuScreen'
import ProfileStack from './ProfileStack'
import PaymentScreen from '../screens/PaymentScreen';
import Header from '../components/Header';
import CreateAuctionScreen from '../screens/CreateAuctionScreen'

const Drawer = createDrawerNavigator();
export default function Drawers() {
    return (
        <Drawer.Navigator 
        drawerPosition="right" initialRouteName="SideMenuScreen"  drawerContent={ props => <SideMenuScreen {...props}
         />}> 
        
        <Drawer.Screen name="ProfileStack" component={ProfileStack} /> 
        <Drawer.Screen name="PaymentScreen" component={PaymentScreen}/>
        <Drawer.Screen name="CreateAuctionScreen" component={CreateAuctionScreen}/>

        




        

      </Drawer.Navigator>
        
    )
}

const styles = StyleSheet.create({})
