import React,{useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

function ProfileScreen({navigation}){
    useEffect(()=>{
        navigation.addListener('focus', () => {
           // when screen is focused (navigated to)
           navigation.openDrawer();
                   });  
      },[navigation])
        return(
        <SafeAreaView>
            {/* <Text>ProfileScreen</Text> */}
        </SafeAreaView>
    )
}

export default ProfileScreen;