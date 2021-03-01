import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideMenuScreen from '../screens/SideMenuScreen'
import ProfileStack from './ProfileStack'
import EditProfile from '../screens/EditProfile';


const Drawer = createDrawerNavigator();
export default function Drawers() {
    return (
        <Drawer.Navigator 
        drawerPosition="right" initialRouteName="SideMenuScreen"  drawerContent={ props => <SideMenuScreen {...props}
         />}> 
        
        <Drawer.Screen name="ProfileStack" component={ProfileStack} /> 
        {/* <Drawer.Screen name="EditProfile" component={EditProfile}/> */}
        {/* // <Drawer.Screen name="HabbitChecker" component={HabbitChecker} />
        // <Drawer.Screen name="TaskChecker" component={TaskChecker} />
        // <Drawer.Screen name="CalenderScreen" component={CalenderScreen} />
        // <Drawer.Screen name="NewsScreen" component={NewsScreen} />
        // <Drawer.Screen name="PlanScreen" component={PlanScreen} />
        // <Drawer.Screen name="BehaviourScreen" component={BehaviourScreen} />  */}
        
        




        

      </Drawer.Navigator>
        
    )
}

const styles = StyleSheet.create({})
