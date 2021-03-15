import React,{useState, useRef }   from 'react';
import {FlatListSlider} from 'react-native-flatlist-slider';
import { FontAwesome5 } from '@expo/vector-icons'; 
import RBSheet from "react-native-raw-bottom-sheet";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {View, Text, SafeAreaView,Image,StyleSheet,TouchableHighlight,Dimensions,FlatList, TouchableWithoutFeedback, TouchableOpacity,ScrollView} from 'react-native';
import { TextInput } from 'react-native';
const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

function ProductDetailScreen({navigation}){
  const [number, onChangeNumber] = useState("");  
  
  
  const refRBSheet = useRef();
 
    const images = [
        {
         image:'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
         
        },
       {
         image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
             },       ]

const DATA=[
{
    key:1,
    image:"https://i.ytimg.com/vi/g8YbJ-1vCa0/hqdefault.jpg",
    title:"Ali",
    time:"45s ago",
    budget:"$105",
},
{
key:2,
image:"https://wallpaperaccess.com/full/2213426.jpg",
title:"Ahmed",
time:"03m ago",
budget:"$95",
},
{
key:3,
image:"https://www.wallpapertip.com/wmimgs/30-308464_cool-profile-pictures-1080p.jpg",
title:"Mujtuba",
time:"04m ago",
budget:"$80",
},
{
key:4,
image:"https://www.wallpapertip.com/wmimgs/30-308464_cool-profile-pictures-1080p.jpg",
title:"Mujtuba",
time:"04m ago",
budget:"$80",
},
{
key:5,
image:"https://www.wallpapertip.com/wmimgs/30-308464_cool-profile-pictures-1080p.jpg",
title:"Mujtuba",
time:"04m ago",
budget:"$80",
},
{
key:6,
image:"https://www.wallpapertip.com/wmimgs/30-308464_cool-profile-pictures-1080p.jpg",
title:"Mujtuba",
time:"04m ago",
budget:"$80",
}
]



    return(
        <View>
          
         <View>
         <TouchableOpacity style={{position:'absolute',top:15,left:15,flex:1}}>
           <Ionicons name="chevron-back" size={24} color="black" />
           </TouchableOpacity>
        <View style={{width:WIDTH,height:HEIGHT/3.8}}>
         <FlatListSlider 
    data={images}
    autoscroll={false} 
    indicatorContainerStyle={{position:'absolute', bottom: 70}}
        indicatorInActiveColor={'#ffffff'}
       animation
        />
</View>
<View style={{width:WIDTH/1.2,padding:12,backgroundColor:"#fff",marginTop:-55,marginHorizontal:"9%",elevation:10, borderRadius:10,justifyContent:'center'}}>
<View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"7%",marginTop:"4%"}}>
<Text style={styles.rate}>$105</Text>
<View style={{flexDirection:"row"}}>
<FontAwesome5 name="clock" size={20} color="#1b1a60" style={{marginRight:5}}  />
<Text style={styles.rate}>{""} 01h 02m 45s </Text>
</View>
</View>
<View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"7%",marginTop:"2%"}}>
<Text style={styles.heading}>Current Bid</Text>
<Text style={{...styles.heading}}>Auction Ends</Text>
</View>
</View>
  </View>
  <View style={{marginBottom:'40%'}}>
<ScrollView style={styles.bottomcard}
      showsVerticalScrollIndicator={false}>

<Text style={{fontSize:20, color:"#1b1a60", fontWeight:"bold"}}>Obag .Moon</Text>
<View style={{flexDirection:"row",marginTop:"1%",justifyContent:"space-between"}}>
<Text style={{...styles.heading,fontSize:12}}>Special-epanded platsic material</Text>
<Text onPress={()=>navigation.navigate('CreateAuctionScreen')} style={{...styles.heading,fontSize:12,color:"#F76300",fontWeight:"bold" }} >More info</Text>
</View>
<View style={{flexDirection:"row",marginTop:"7%",marginRight:"15%"}}>
<View>
<Text style={styles.features}>New</Text>
<Text style={styles.heading}>Condition</Text>
</View>
<View style={{marginLeft:"14%"}}>
<Text style={{...styles.features}}>2019</Text>
<Text style={{...styles.heading}}>Year</Text>
</View>
<View style={{marginLeft:"14%"}}>
<Text style={{...styles.features}}>Small</Text>
<Text style={styles.heading}>Size</Text>
</View>
<View style={{marginLeft:"14%"}}>
<Text style={{...styles.features,marginLeft:"7%"}}>$50</Text>
<Text style={{...styles.heading,marginLeft:"1.2%"}}>Starting Bid</Text>
</View>
</View>

<Text style={{...styles.features,fontSize:16, marginTop:"5%"}}>Bidders</Text>

<FlatList
data={DATA}
showsVerticalScrollIndicator={false}
renderItem={({ item, index }) =>(
<View style={{flexDirection:"row",justifyContent:"space-between", marginTop:"2%"}}>
<View style={{flexDirection:"row", height:HEIGHT/13,width:WIDTH/3, }}>
{/*
<Image 
key={index}
source={{uri:item.image}}
 style={{height:60,width:50,borderRadius:15}}


 />
*/}
<View style={{marginLeft:"4%",}}> 
<Text style={{color:"#1b1a60",fontSize:15,fontWeight:"bold"}}>{item.title}</Text>
<Text style={{color:"grey",fontSize:13,}}>{item.time}</Text>

</View></View>
<View style={{backgroundColor:"#F76300" ,justifyContent:"center",alignItems:"center",borderRadius:10,padding:10,height:40}}>
<Text style={{color:'#fff',fontWeight:'bold'}}>{item.budget}</Text>

</View>
</View>
)}
/>


<TouchableOpacity style={{backgroundColor:"#1b1a60",alignItems:"center",borderRadius: 14,
              height:HEIGHT*0.06,justifyContent:'center'  }}  onPress={() => refRBSheet.current.open()} >
    <Text style={{color:"#fff",fontWeight:"bold"}}>Place a Bid!</Text>
</TouchableOpacity>


</ScrollView>
</View>
<RBSheet
        ref={refRBSheet}
         height={470}
        closeOnDragDown={true}
        closeOnPressMask={false}
                customStyles={{
          wrapper: {
            backgroundColor: "transparent",
                      },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <View>

<Text style={{fontSize:30, fontWeight:"bold",color:"#1b1a60", marginLeft:"7%"}}>Place a Bid</Text>

<View style={{flexDirection:"row",marginTop:"9%",justifyContent:"space-between",marginHorizontal:"9%" }}>
<TouchableOpacity style={styles.bidAmount}>
    <Text style={styles.amounts}>$110</Text></TouchableOpacity>
    <TouchableOpacity style={styles.bidAmount}>
    <Text style={styles.amounts}>$115</Text></TouchableOpacity>
    <TouchableOpacity style={styles.bidAmount}>
    <Text style={styles.amounts}>$120</Text></TouchableOpacity>
    <TouchableOpacity style={styles.bidAmount}>
    <Text style={styles.amounts}>$125</Text></TouchableOpacity>
</View>

<View style={styles.bottomView}>

<TouchableOpacity style={styles.plus}>
<AntDesign name="minus" size={36} color="#fff" /></TouchableOpacity>
<View>
<TextInput style={{Color:"#1b1a60",fontSize:36,fontWeight:"bold", }}  keyboardType="numeric" placeholder="$110"  onChangeText={onChangeNumber}  />
<Text style={{fontSize:13,color:"grey"}} >Current Bid</Text>

</View>
<TouchableOpacity style={styles.plus}>
<AntDesign name="plus" size={36} color="#fff" /></TouchableOpacity>
</View>
<View>
<TouchableOpacity style={styles.place}  onPress={() => refRBSheet.current.close()} >
    <Text style={{color:"#fff",fontWeight:"bold"}}>Place a Bid!</Text>
</TouchableOpacity>
</View>
</View>
</RBSheet>
</View>
         
      
    )
}

const styles = StyleSheet.create({
    
rate:{
color:"#1b1a60",
fontSize:14,
fontWeight:"bold"
 
},
heading:{
fontSize:14,
color:"grey"
},
bottomcard:{
marginHorizontal:"8%",
marginTop:"4%",
height:'70%'
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
plus:{
  height:HEIGHT/18,width:WIDTH/7,elevation:10,backgroundColor:"#1b1a60",fontWeight:"bold",borderRadius:12,justifyContent:"center",alignItems:"center",marginTop:"3%"
},
bottomView: 
{flexDirection:"row",marginTop:"15%",marginHorizontal:"9%",justifyContent:"space-between"},
place:{
  backgroundColor:"#1b1a60",alignItems:"center",borderRadius: 16,
              padding:16,marginHorizontal:"9%",marginTop:"17%"
},
amounts:{
  color:"#1b1a60",fontWeight:"bold"
}


});


export default ProductDetailScreen;