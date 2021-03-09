
import React, {useState,useEffect} from 'react'
import { StyleSheet, Text, View,StatusBar,Platform,Dimensions,SafeAreaView } from 'react-native'
import ImageInputList from '../components/ImageInputList';
import * as ImagePicker from 'expo-image-picker'

import Header from '../components/Header'
const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;



export default function CreateAuctionScreen() {
  const [userId, setUserId] = useState()
  const [images, setImages] = useState([])
  const [imageName, setImageName] = useState()

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const handleAdd = (uri) => {
    const {imageName} = 'Car' + userId;
    let updatedImages = [...images, uri];
    console.log('handle add => ', updatedImages);
    setImages(updatedImages);
    setImageName(imageName)
  };


  const handleRemove = (uri) => {
    let updatedImages = images.filter((imageUri) => imageUri !== uri);
    setImages(updatedImages)
  };


    return (
        <SafeAreaView style={styles.container}>
            <Header 
            text="Create Auction"
            />
          <View style={styles.auctionTitle}>
            
            <Text style={styles.auctionTitleText}>Auction Title</Text>
          </View>
          <View style={{...styles.auctionTitle,backgroundColor:'#DEE2ED'}}>
            
            <Text style={{...styles.auctionTitleText,fontWeight:'normal'}}>Description</Text>
          </View>

          <View style={{...styles.auctionTitle,backgroundColor:'#DEE2ED',}}>
            
            <Text style={{...styles.auctionTitleText,fontWeight:'normal'}}>Starting Date</Text>
          </View>

          <View style={{...styles.auctionTitle,backgroundColor:'#DEE2ED',}}>
            
            <Text style={{...styles.auctionTitleText,fontWeight:'normal'}}>Expiry Date</Text>
          </View>

          <View style={{...styles.auctionTitle,backgroundColor:'#DEE2ED'}}>
            
            <Text style={{...styles.auctionTitleText,fontWeight:'normal'}}>Bid Starting Price</Text>
          </View>
          <ImageInputList
                    imageUris={images}
                    onAddImage={handleAdd}
                    onRemoveImage={handleRemove}
                  />
          {/* <FormImagePicker name="images"/> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

container:
{
    flex:1,
    paddingTop:Platform.OS==='android'?StatusBar.currentHeight:0,
    backgroundColor:'#DEE2ED',

},

auctionTitle:
{
    width:WIDTH,
    padding:12,
    backgroundColor:'#EEEFF3',
    marginBottom:3,
    
},

auctionTitleText:
{

    color:'gray',
    fontSize:16,
    opacity:0.8,
    fontWeight:'bold'
    
}

})
