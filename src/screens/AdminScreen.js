import React, { useState } from 'react'
import { StyleSheet, Text, View,Image,SafeAreaView,FlatList, TextInput,Dimensions,TouchableOpacity, ImageBackground, TouchableWithoutFeedback, ScrollView , StatusBar} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {Feather} from '@expo/vector-icons'
// import { Images } from '../constants';
const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;
export default function AdminScreen() {
    const [isCar, setIsCar] = useState(false)
    return (
        <SafeAreaView style={styles.container}>
        <View style={{...styles.row,marginTop:'5%',justifyContent:'space-between',marginHorizontal:'5%'}}>
        <Text style={{fontSize:24,fontWeight:'bold'}}>
                Requests
        </Text>
        <View style={{padding:'2%',borderWidth:1,borderRadius:5,alignSelf:'flex-end'}}>
            <Text>Logout</Text>
        </View>
        </View>
       
        <View style={{marginHorizontal:'3%',marginTop:'5%'}}>
            <View style={{...styles.shadow,flexDirection:'row',borderRadius:20,padding:1,alignItems:'center',justifyContent:'space-between'}}>
           <View style={styles.row}>
            <Image style={{height:HEIGHT*0.1,width:WIDTH*0.2,borderRadius:20}} source={{uri:'https://www.delta.com/content/dam/delta-applications/merch/hero_stub/hotel-landing-hero.jpg'}}
/>
<View style={{marginLeft:'4%'}}>
   <Text style={{fontSize:15,fontWeight:'bold',color:'#03528A',width:WIDTH*0.33}}>Product name</Text>
   <Text style={{fontSize:13,marginTop:5}}>Product Price</Text>
</View>
</View>
<View style={{flexDirection:'row',alignItems:'center'}}>
<View style={{paddingVertical:'3%',paddingHorizontal:'4%',backgroundColor:'green',borderRadius:10,justifyContent:'center',marginRight:10}}>
    <Text style={{...styles.shadowText,fontSize:14,color:'white',fontWeight:'bold'}}>Accept</Text>
</View>
<View style={{paddingVertical:'3%',paddingHorizontal:'4%',backgroundColor:'red',borderRadius:10,justifyContent:'center',marginRight:10}}>
    <Text style={{...styles.shadowText,fontSize:14,color:'white',fontWeight:'bold'}}>Decline</Text>
</View>
</View>
</View>

</View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor:'white'
    },
    row:{
        flexDirection:'row',
        alignItems:'center'
    },
    type:{
        paddingHorizontal:'8%',
        paddingVertical:'3%',
        backgroundColor:'#03528A',
        marginHorizontal:2,
        borderRadius:5
    },
    typeText:{
        color:'white',
        fontSize:16,
        fontWeight:'bold',
    },
    shadow:{
        shadowColor:'grey',
        shadowOffset:{width:0,height:1},
        shadowOpacity:0.8,
        shadowRadius:3,
        elevation:2,
        backgroundColor:'white'
    },
    shadowText:{
        shadowRadius:2,
        shadowOpacity:0.8,
        shadowOffset:{width:0,height:1},
        shadowColor:'#000'
    },
})
