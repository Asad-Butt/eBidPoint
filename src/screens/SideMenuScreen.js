import React from 'react'
import { StyleSheet, Text, View,Platform,Dimensions,Image, SafeAreaView,StatusBar } from 'react-native';
import {createDrawerNavigator,DrawerItem} from '@react-navigation/drawer';
import {FontAwesome} from "@expo/vector-icons";
import {Foundation} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {Entypo} from "@expo/vector-icons";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons';

import Drawer from 'react-native-paper'
// const Drawer = createDrawerNavigator();
const HEIGHT = Dimensions.get("screen").height;
const WIDTH = Dimensions.get("screen").width;

export default function SideMenuScreen(props)  {
    return (
        <SafeAreaView style={styles.drawerContainer}> 
      <View style={styles.upperBG}/>
<DrawerItem 
        icon={({color,size})=> (
<MaterialCommunityIcons  style={{color:"purple"}}
name="home-outline"
color={color}
size={size}/>
)}
label="Home"
onPress={() => {props.navigation.navigate('epolreScreen')}}
          />
<DrawerItem 
        icon={({color,size})=> (
<MaterialCommunityIcons  style={{color:"purple"}}
name="face-profile"
color={color}
size={size}/>
)}
label="Edit Profile"
onPress={() => {props.navigation.navigate('EditProfile')}}
          />

        
          <DrawerItem 
        icon={({color,size})=> (
<Fontisto style={{color:"purple"}}
 name="product-hunt" size={size} color={color} 
label="Products"
         />

        )}
        label="Products"
        onPress={() => {props.navigation.navigate('MyProductsScreen')}}        
/>
          
{/* </Drawer.Section> */}
<View style={styles.bottomDrawerSection}> 
        <DrawerItem 
        icon={({color,size})=> (
<MaterialCommunityIcons  style={{color:"purple"}}
name="exit-to-app"
color={color}
size={size}/>
)}
label="Log Out"
   />



     </View>   
     </SafeAreaView>       
                    )
}



const styles = StyleSheet.create({
    upperBG:{
        height:100,
        width:'100%',
        borderBottomLeftRadius:WIDTH,
        borderBottomRightRadius:WIDTH,
        backgroundColor:'#F8934F',
        alignSelf:'center'
    },
})
 