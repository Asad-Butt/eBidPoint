
import React, {useState,useEffect} from 'react'
import { StyleSheet, Text,Button,Alert,TextInput, View,StatusBar,Platform,Dimensions,SafeAreaView } from 'react-native'
import ImageInputList from '../components/ImageInputList';
import * as ImagePicker from 'expo-image-picker'
import * as firebase from 'firebase';

import Header from '../components/Header'
const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;



export default function CreateAuctionScreen() {
  const [userId, setUserId] = useState()
  const [images, setImages] = useState([])
  const [imageName, setImageName] = useState()

  const [image, setImage] = useState(null);

  const [value, onChangeText] = React.useState('');

  const [value1, onChangeText1] = React.useState('');
  const [value2, onChangeText2] = React.useState('');
  const [value3, onChangeText3] = React.useState('');
  const [value4, onChangeText4] = React.useState('');


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

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
   
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


//  //Upload to firebase
//   const onChooseImagePress = async () => {
  
//     let result = await ImagePicker.launchImageLibraryAsync();

//     if (!result.cancelled) {
//       uploadImage(result.uri, "test-image")
//         .then(() => {
//           Alert.alert("Success");
//         })
//         .catch((error) => {
//           Alert.alert(error);
//         });
//     }
//   }

//   const uploadImage = async (uri, imageName) => {
//     const response = await fetch(uri);
//     const blob = await response.blob();

//     var ref = firebase.storage().ref().child("images/" + imageName);
//     return ref.put(blob);
//   }

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
        <Header text="Create Auction" />

        <TextInput
          placeholder="Auction Title"
          placeholderTextColor='gray'
          style={styles.auctionTitle}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />

         <TextInput
          placeholder="Description"
          placeholderTextColor='gray'
          style={{ ...styles.auctionTitle,paddingVertical:25,marginTop:5 }}
          onChangeText={(text) => onChangeText1(text)}
          value={value1}
        />
       

       <TextInput
          placeholder="Starting Date"
          placeholderTextColor='gray'
          style={{ ...styles.auctionTitle,marginTop:5 }}
          onChangeText={(text) => onChangeText2(text)}
          value={value2}
        />

        <TextInput
          placeholder="Expiry Date"
          placeholderTextColor='gray'
          style={{ ...styles.auctionTitle,marginTop:5 }}
          onChangeText={(text) => onChangeText3(text)}
          value={value3}
        />

         <TextInput
          placeholder="Bid Starting Price"
          placeholderTextColor='gray'
          style={{ ...styles.auctionTitle,marginTop:5 }}
          onChangeText={(text) => onChangeText4(text)}
          value={value4}
        />
        <ImageInputList
          imageUris={images}
          onAddImage={handleAdd}
          onRemoveImage={handleRemove}
        />
        {/* <FormImagePicker name="images"/> */}
        <Button title="Choose image..." onPress={pickImage} />
      </SafeAreaView>
    );
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
    width:WIDTH-20,
    borderRadius:10,
    alignSelf:'center',
    marginTop:10,
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
