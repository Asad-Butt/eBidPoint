
import React, {useState,useEffect} from 'react'
import { StyleSheet, Text,Button,Alert,TextInput, View,StatusBar,Platform,Dimensions,SafeAreaView } from 'react-native'
import ImageInputList from '../components/ImageInputList';
import * as ImagePicker from 'expo-image-picker'
import Header from '../components/Header'
const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;
import {uploadProductApi} from "../apis/productApis/productApis";
import {getUserId} from '../apis/LocalDB';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';


export default function CreateAuctionScreen() {
  const [userId, setUserId] = useState()
  const [images, setImages] = useState([])
  const [imageName, setImageName] = useState()
  const [image, setImage] = useState(null);
  const [title, setTitle] = React.useState('');
  const [descipe, setDescipe] = React.useState('');
  const [catagory, setCatagory] = React.useState('');
  const [expiryDate, setExpiryDate] = React.useState('');
  const [price,setPrice] = React.useState('');
  const [city,setCity] = React.useState('');

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
  
  const uploadProducts=async()=>{
    getUserId(async(user) => {
      console.log('userid',user)
      const photo1 = {
        uri:images[0],
        type: "image/jpeg",
        name: "photo1.jpg",
      };
      const photo2 = {
        uri:images[1],
        type: "image/jpeg",
        name: "photo2.jpg",
      };
      const photos = [photo1,photo2];
      console.log("images:",photos);
      await uploadProductApi(user,title,descipe,price,photos,city,expiryDate,catagory).then((response)=>{
        console.log("response:",response)
      }).catch((error)=>{
        console.log("error:",error)
      })
    }).catch(error => {
      console.log("error:",error)
    })
}

    return (
      <SafeAreaView style={styles.container}>
        <Header text="Create Auction" />
        <ScrollView>
        <TextInput
          placeholder="Auction Title"
          placeholderTextColor='gray'
          style={styles.auctionTitle}
          onChangeText={(text) => setTitle(text)}
          value={title}
        />

         <TextInput
          placeholder="Description"
          placeholderTextColor='gray'
          style={{ ...styles.auctionTitle,paddingVertical:25,marginTop:5 }}
          onChangeText={(text) => setDescipe(text)}
          value={descipe}
        />
       

       <TextInput
          placeholder="Catagory"
          placeholderTextColor='gray'
          style={{ ...styles.auctionTitle,marginTop:5 }}
          onChangeText={(text) => setCatagory(text)}
          value={catagory}
        />

        <TextInput
          placeholder="City"
          placeholderTextColor='gray'
          style={{ ...styles.auctionTitle,marginTop:5 }}
          onChangeText={(text) => setCity(text)}
          value={city}
        />

        <TextInput
          placeholder="Expiry Date"
          placeholderTextColor='gray'
          style={{ ...styles.auctionTitle,marginTop:5 }}
          onChangeText={(text) => setExpiryDate(text)}
          value={expiryDate}
        />

         <TextInput
          placeholder="Bid Starting Price"
          placeholderTextColor='gray'
          style={{ ...styles.auctionTitle,marginTop:5 }}
          onChangeText={(text) => setPrice(text)}
          value={price}
        />
        <ImageInputList
          imageUris={images}
          onAddImage={handleAdd}
          onRemoveImage={handleRemove}
        />
        <Button title="Choose image..." onPress={pickImage} />
      <TouchableOpacity onPress={uploadProducts}
      style={{height:40,width:WIDTH-40,paddingVertical:6,marginVertical:10,alignSelf:'center',backgroundColor:"#F76300",borderRadius:20}}>
        <Text style={{textAlign:'center',fontSize:20,fontWeight:"bold",color:'white'}}>Submit</Text>
      </TouchableOpacity>
      </ScrollView>
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
