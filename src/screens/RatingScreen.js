import React,{useState, useRef }   from 'react';
import {View,TextInput,Modal, Text,StyleSheet,Dimensions,FlatList, TouchableOpacity,ScrollView,TouchableHighlight,SafeAreaView} from 'react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';
import { useFocusEffect } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
//import {saledProductApi} from '../apis/productApis/productApis'
import {getUserId} from '../apis/LocalDB';
import moment from 'moment';
import Header from '../components/Header';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

function RatingScreen({route,navigation}){
  const {product,shippmentAddress} = route.params
  const [modalVisible, setModalVisible] = useState(false);
  const images=[
    {
     image:"https://e-bit-point-apis.herokuapp.com/public/"+product.imgCollection[0]
    },
    {
      image:"https://e-bit-point-apis.herokuapp.com/public/"+product.imgCollection[1]
    },
  ]

  const paymentMethod=()=>{
    if(shippmentAddress!==""){
      navigation.navigate("PaymentScreen",{
        "screen":"shippment",
        "product":product
      })
    }else{
      alert("Please Insert Shippment Address")
    }
  }

  return(
        <SafeAreaView style={{flex:1}}>                
<View >
<Header text='Shipment Details' navigation={navigation} isBack={true} />


<ScrollView style={styles.bottomcard}
      showsVerticalScrollIndicator={false}>
  <Text style={{...styles.heading,color:'#1b1a60',fontWeight:'bold',textAlign:'center'}}>Checkout the details before proceeding</Text>
<View style={{marginTop:"10%"}}>
<Text style={{...styles.heading,color:'#1b1a60',fontWeight:'bold',marginTop:'5%'}}>First Name :</Text>
<TextInput
            style={[styles.input, { height: 60}]}
            autoCapitalize="none"
            placeholder="First Name"
            multiline textAlignVertical="top"
            value={'First Name'}
            editable={false}
          />
          <Text style={{...styles.heading,color:'#1b1a60',fontWeight:'bold',marginTop:'5%'}}>Last Name :</Text>
<TextInput
            style={[styles.input, { height: 60}]}
            autoCapitalize="none"
            placeholder="Last Name"
            multiline textAlignVertical="top"
            value={'Last Name'}
            editable={false}
          />
<Text style={{...styles.heading,color:'#1b1a60',fontWeight:'bold',marginTop:'5%'}}>Phone :</Text>
<TextInput
            style={[styles.input, { height: 60}]}
            autoCapitalize="none"
            placeholder="User Phone"
            multiline textAlignVertical="top"
            value={'User Phone'}
            editable={false}
          />
          <Text style={{...styles.heading,color:'#1b1a60',fontWeight:'bold',marginTop:'5%'}}>Address :</Text>
<TextInput
            style={[styles.input, { height: 120}]}
            autoCapitalize="none"
            placeholder="Address"
            multiline textAlignVertical="top"
            value={shippmentAddress}
            editable={false}
          />
</View>
       
<TouchableOpacity onPress={paymentMethod} style={{backgroundColor:"#1b1a60",alignItems:"center",marginTop:30,borderRadius: 14,
            marginBottom:20,  height:HEIGHT*0.06,justifyContent:'center'  }} >
    <Text style={{color:"#fff",fontWeight:"bold"}}>Buy Product</Text>
</TouchableOpacity>

</ScrollView>
</View>

<Modal animationType="fade" 
transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            
            <View style={{width:WIDTH,marginTop:10,height:HEIGHT*0.3}}>
         <FlatListSlider 
         onPress={() => {
          setModalVisible(!modalVisible);
        }}
      
          data={images}
          autoscroll={false} 
          indicatorContainerStyle={{position:'absolute', bottom: 70}}
          indicatorInActiveColor={'#ffffff'}
          
        />
</View>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}x
              >
                <Text style={styles.textStyle}>Minimize</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

</SafeAreaView>
)}

const styles = StyleSheet.create({
    
rate:{
color:"#1b1a60",
fontSize:14,
fontWeight:"bold"
 
},
heading:{
fontSize:18,
color:"grey"
},
bottomcard:{
marginHorizontal:"8%",
marginTop:"4%",
},
features:{
    fontSize:14,
    color:"#1b1a60",
    fontWeight:"bold",
    paddingBottom:5
},
bidAmount:{
  height:HEIGHT/18,width:WIDTH/6,elevation:10,backgroundColor:"#F5F5F5",fontWeight:"bold",borderRadius:12,justifyContent:"center",alignItems:"center"
},
openButton: {
  backgroundColor: "#F194FF",
  borderRadius: 20,
  padding: 10,
  elevation: 2,
  // marginTop: hp("25%"),
},
modalView: {
  marginTop: hp("20%"),
  width: wp("100%"),
  alignSelf: "center",
  backgroundColor: "white",
  borderRadius: 20,
  height: hp("40%"),
  alignItems: "center",

  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
},
input: {
  fontSize: 14,
  padding: 14,
  borderRadius: 14,
  borderColor: '#A3A4AA',
  borderWidth: 1,
  backgroundColor: '#f7f7f7',
  marginTop: '2.5%',
  alignItems:'center'
},
});


export default RatingScreen;