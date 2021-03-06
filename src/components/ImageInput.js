import React,{useEffect} from 'react'
import { StyleSheet, Text, View,Image,TouchableWithoutFeedback, Alert } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'


export default function ImageInput({imageUri,onChangeImage}) {


    const handlePress = () => {

        if(!imageUri) selectImage();
        else  
        Alert.alert("Delete","Are you sure you want to delete the image",
       [ {text:"Yes", onPress:()=> onChangeImage(null)},
        {text:"No"},]
        )
        
        }



    const requestPermission = async ()=> {

        const result= await ImagePicker.requestCameraRollPermissionsAsync();
        if(!result.granted)
        alert("You need to enable permission to access the library")
      }
      
        //code that we will write hear will be equivalent to componet did mount
        useEffect(()=>{
                  
          requestPermission();
      
        },[])






 
    const selectImage = async ()=> {
          
        try {
          const result= await ImagePicker.launchImageLibraryAsync(
              {
                  mediaTypes:ImagePicker.MediaTypeOptions.Images,
                  quality:0.5,
              }
          );
          if(!result.cancelled)
          
            onChangeImage(result.uri)
      
      
          
        } catch (error) {
          
          console.log('Something went wrong in getting image permission')
        }
      
        }





    return (
        <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
        {!imageUri &&(<MaterialCommunityIcons name="camera" size={40} color={'#6e6969'} />)}

        {imageUri && <Image source={{uri:imageUri}} style={styles.image}  />}
        
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({

container:
{
    backgroundColor:'#fc5c65',
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center',
    height:100,
    width:100,
    overflow:'hidden'
},

image:
{
    width:'100%',
    height:'100%'

}


})
