
import React from 'react'
import { StyleSheet, Text, View,StatusBar,Platform,Dimensions,SafeAreaView } from 'react-native'
import FormImagePicker from '../components/FormImagePicker';
import Header from '../components/Header'
const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;



export default function CreateAuctionScreen() {
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
          <FormImagePicker name="images"/>
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
