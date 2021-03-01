import React,{useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

function ProfileScreen({navigation}){
    // useEffect(()=>{
    //     navigation.addListener('focus', () => {
    //        // when screen is focused (navigated to)
    //        navigation.openDrawer();
    //     });  
    //   },[navigation])

 useFocusEffect(
    React.useCallback(() => {
        // navigation.addListener('focus', () => {
        navigation.openDrawer();
        // })
    }, [])
  );
        return(
        <SafeAreaView>
            {/* <Text>ProfileScreen</Text> */}
        </SafeAreaView>
    )
}

export default ProfileScreen;