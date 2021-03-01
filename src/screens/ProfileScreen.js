import React,{useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

function ProfileScreen({navigation}){

 useFocusEffect(
    React.useCallback(() => {
        // navigation.addListener('focus', () => {
        navigation.openDrawer();
        // })
    }, [])
 )
        return(
        // <SafeAreaView>
        //     {/* <Text>ProfileScreen</Text> */}
        // </SafeAreaView>
        <View/>
    );
}

export default ProfileScreen;