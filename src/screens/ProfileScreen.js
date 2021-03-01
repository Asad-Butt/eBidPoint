import React,{useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

function ProfileScreen({navigation}){

//  useFocusEffect(
//     React.useCallback(() => {
//         // navigation.addListener('focus', () => {
//         navigation.openDrawer();
//         // })
//     }, [navigation])
//  )
useEffect(()=>{
    navigation.addListener('focus', () => {
        navigation.openDrawer();
        })
},[navigation])
        return(
        <SafeAreaView>
            {/* <Text>ProfileScreen</Text> */}
        </SafeAreaView>
    )
}

export default ProfileScreen;