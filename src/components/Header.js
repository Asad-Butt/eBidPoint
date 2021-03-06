import React,{useState} from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View,SafeAreaView,Dimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function Header(props,nav){
    return(
        <SafeAreaView>
    <View style={{flexDirection:"row",paddingVertical:15,justifyContent:"space-between",alignItems:'center',borderBottomWidth:0.5,borderBottomColor:'#f76300' }}>
            <TouchableOpacity onPress={()=> props.navigation.goBack()}>
            <Ionicons name="chevron-back-sharp" size={24} color="#f76300" style={{marginLeft:"4%"}} />
            </TouchableOpacity>
            <Text style={{fontSize:20,color:"#f76300",fontWeight:"bold"}}>{props.text}</Text>
            <View style={{marginRight:20}}></View>
            </View>
            </SafeAreaView>
    )
}
