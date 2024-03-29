import React,{useEffect} from 'react';
import {View, Text, SafeAreaView,StyleSheet,Dimensions} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import {getUserId} from '../apis/LocalDB';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../components/Header';

function ProfileScreen({navigation}){
    const HEIGHT = Dimensions.get("screen").height;
const WIDTH = Dimensions.get("screen").width;

{/*
 useFocusEffect(
    React.useCallback(() => {
    getUserId((user) => {
      console.log('userid',user)
    })
        // navigation.addListener('focus', () => {
        navigation.openDrawer();
        // })
    }, [])
)*/}
        return(
        <SafeAreaView>
            <Header text = "Profile" navigation={navigation} drawer={true} isBack={false}/>
<View style={{marginHorizontal:15}}>
<View style={{flexDirection:"row",marginTop:"5%",alignItems:"center",}}>
<View style={{backgroundColor:"#f76300",padding:10,borderRadius:20, justifyContent:"center",alignItems:"center"}}>
<Entypo name="user" size={18} color="#fff" />
</View>
<Text style={{...styles.heading,marginLeft:"3%",marginBottom:"8%",color:"black"}}>Profile</Text>

</View>
<Text style={{...styles.heading,marginTop:"0.5%",fontSize:13}}>First Name</Text>
<Text style={styles.input}>
Muhammad</Text>
<View style={styles.separator}/>

<Text style={{...styles.heading,fontSize:13}}>Last Name</Text>
<Text style={styles.input}>Ibrahim</Text> 
<View style={styles.separator}/>
<View style={{flexDirection:"row",marginTop:"5%",alignItems:"center",}}>
<View style={{backgroundColor:"#f76300",padding:10,borderRadius:20, justifyContent:"center",alignItems:"center"}}>
<MaterialIcons name="location-on" size={20} color="#fff" />
</View>
<Text style={{...styles.heading,marginLeft:"3%",marginBottom:"8%",color:"black"}}>Address</Text>

</View>
<Text style={{...styles.heading,fontSize:13,marginTop:"0.5%",}}>Location</Text>
<Text style={{...styles.input,marginTop:".5%"}}
>Street no 3 House no 20 Sagheer Town Kharian</Text> 
<View style={styles.separator}/>
<Text style={{...styles.heading,fontSize:13}}>Email</Text>
<Text style={styles.input}
>ibrahimqaddus@gmail.com</Text>
<View style={styles.separator}/>
<Text style={{...styles.heading,fontSize:13}}>Phone</Text>
<Text style={styles.input}
>03484209648</Text>
<View style={styles.separator}/>

</View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    heading:{
        color:"#f76300",
        fontSize:15,
        marginTop:"10%",
        fontWeight:"bold",
        marginLeft:25
        },
        input:{
        marginLeft:25,
        marginTop:"3%",
        color:"#505050",
        fontSize:12
        },
        separator:{
            borderBottomWidth:0.7,
            marginLeft:20,
            paddingTop:5
        }

});


export default ProfileScreen;