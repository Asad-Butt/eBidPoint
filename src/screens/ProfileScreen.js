import React,{useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import {getUserId} from '../apis/LocalDB';

function ProfileScreen({navigation}){

 useFocusEffect(
    React.useCallback(() => {
    getUserId((user) => {
      console.log('userid',user)
    })
        // navigation.addListener('focus', () => {
        navigation.openDrawer();
        // })
    }, [])
 )
        return(
        <SafeAreaView>
            {/* <Text>ProfileScreen</Text> */}
        </SafeAreaView>
    )
}

export default ProfileScreen;