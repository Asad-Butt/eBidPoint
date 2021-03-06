import React,{useEffect} from 'react';
import {View, Text, SafeAreaView,StyleSheet,Dimensions} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import {getUserId} from '../apis/LocalDB';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

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
                    <View style={{flexDirection:"row",marginTop:"12%",justifyContent:"space-between" }}>
            <Ionicons name="chevron-back-sharp" size={24} color="#f76300" style={{marginLeft:"4%"}} onPress={()=> navigation.goBack() }/>
            
            <Text style={{fontSize:16,color:"#f76300",fontWeight:"bold"}}>Profile</Text>
            <View><Entypo name="menu" size={24} color="#f76300" style={{marginRight:"4%"}} onPress={() => navigation.openDrawer()} /></View>
            </View>
<View style={{marginHorizontal:"4%"}}>
<View style={{flexDirection:"row",marginTop:"5%",alignItems:"center",}}>
<View style={{backgroundColor:"#f76300",height:HEIGHT/23,width:WIDTH/10,borderRadius:40, justifyContent:"center",alignItems:"center"}}>
<Entypo name="user" size={18} color="#fff" />
</View>
<Text style={{...styles.heading,marginLeft:"3%",marginBottom:"8%",color:"black"}}>Profile</Text>

</View>
<Text style={{...styles.heading,marginTop:"0.5%"}}>First Name</Text>
<Text style={styles.input}>
Muhammad</Text>

<Text style={styles.heading}>Last Name</Text>
<Text style={styles.input}>Ibrahim</Text> 
<View style={{flexDirection:"row",marginTop:"5%",alignItems:"center",}}>
<View style={{backgroundColor:"#f76300",height:HEIGHT/23,width:WIDTH/10,borderRadius:50, justifyContent:"center",alignItems:"center"}}>
<MaterialIcons name="location-on" size={20} color="#fff" />
</View>
<Text style={{...styles.heading,marginLeft:"3%",marginBottom:"8%",color:"black"}}>Address</Text>

</View>
<Text style={{...styles.input,marginTop:".5%"}}
>Street no 3 House no 20 Sagheer Town Kharian</Text> 
<Text style={styles.heading}>Email</Text>
<Text style={styles.input}
>ibrahimqaddus@gmail.com</Text>
<Text style={styles.heading}>Phone</Text>
<Text style={styles.input}
>03484209648</Text>

</View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    heading:{
        color:"#f76300",
        fontSize:13,
        marginTop:"10%",
        fontWeight:"bold",
        marginLeft:"14%"
        },
        input:{
         borderBottomWidth:0.4,
         borderBottomColor:"#f76300",
        // paddingVertical:12,
        marginLeft:"14%",
        marginTop:"7%",
        color:"#505050",
        fontSize:12
        
        },


});


export default ProfileScreen;