import React,{useState, useRef }   from 'react';
import {View, Text, SafeAreaView,Image,StyleSheet,TouchableHighlight,Dimensions,FlatList, TouchableWithoutFeedback, TouchableOpacity,ScrollView} from 'react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';
import { useFocusEffect } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import RBSheet from "react-native-raw-bottom-sheet";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {fetchAllBidsofProductApi} from "../apis/bidApis/bidApis";
import {getUserId} from '../apis/LocalDB';
import moment from 'moment';
const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

function ProductDetailScreen({route,navigation}){
  const {product,days,time} = route.params
  const [bids,setBids] = useState();
  const [images,setimages] =useState(); 
  useFocusEffect(
    React.useCallback(() => {
    getBids();
  }, [])
  );
  
  const getBids=async()=>{
    let imgs=[]
    product.imgCollection.forEach(element => {  
      element = "https://e-bit-point-apis.herokuapp.com/public/"+element;
      //var key = JSON({"image"})
      //key = element;
      //imgs.push(obj)
      return element;
    });
    console.log("image",imgs);
    setimages(imgs)
    getUserId(async(user) => {
    console.log('userid',user)
    console.log("product id:",product._id)
    await fetchAllBidsofProductApi(user,product._id).then((response)=>{
        console.log("response:",response);
        setBids(response)
    }).catch((e)=>{
        console.log("error:",e)
      })
    }).catch(error => {
        console.log("error:",error)
      })
  }

  const refRBSheet = useRef();
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
<Text style={styles.rate}>{days>0 && days + "d "}{time[0] + "h "+ time[1] + "m "+ time[2] + "s"}</Text>
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

<Text style={{fontSize:20, color:"#1b1a60", fontWeight:"bold"}}>{product.created_by.first_name} {product.created_by.last_name}</Text>
<View style={{flexDirection:"row",marginTop:"1%",justifyContent:"space-between"}}>
<Text style={{...styles.heading,fontSize:12,width:WIDTH/1.5}}>{product.description}</Text>
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
<Text style={{...styles.features,marginLeft:"7%"}}>{product.price}</Text>
<Text style={{...styles.heading,marginLeft:"1.2%"}}>Starting Bid</Text>
</View>
</View>

<Text style={{...styles.features,fontSize:16, marginTop:"5%"}}>Bidders</Text>

<FlatList
data={bids}
showsVerticalScrollIndicator={false}
renderItem={({ item, index }) =>{
const {bid,created_by,createdAt} = item
const {first_name} = created_by
return(
<View style={{flexDirection:"row",justifyContent:"space-between", marginTop:"2%"}}>
<View style={{flexDirection:"row", height:HEIGHT/13,width:WIDTH/2}}>
<View style={{marginLeft:"4%"}}> 
<Text style={{color:"#1b1a60",fontSize:15,fontWeight:"bold"}}>{first_name}</Text>
<Text style={{color:"grey",fontSize:13,}}>{moment(createdAt).format("YYYY/MM/DD")}      {moment(createdAt).format('LT').toString()}</Text>

</View></View>
<View style={{backgroundColor:"#F76300" ,justifyContent:"center",alignItems:"center",borderRadius:10,padding:10,height:40}}>
<Text style={{color:'#fff',fontWeight:'bold'}}>{bid}</Text>

</View>
</View>
)
}}
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
<View style={{height:HEIGHT/18,width:WIDTH/6,elevation:10,backgroundColor:"#F5F5F5",fontWeight:"bold",borderRadius:12,justifyContent:"center",alignItems:"center"}}>
    <Text style={{color:"#1b1a60",fontWeight:"bold"}}>$110</Text></View>
    <View style={{height:HEIGHT/18,width:WIDTH/6,elevation:10,backgroundColor:"#F5F5F5",fontWeight:"bold",borderRadius:12,justifyContent:"center",alignItems:"center"}}>
    <Text style={{color:"#1b1a60",fontWeight:"bold",padding:10}}>$115</Text></View>
    <View style={{height:HEIGHT/18,width:WIDTH/6,elevation:10,backgroundColor:"#F5F5F5",fontWeight:"bold",borderRadius:12,justifyContent:"center",alignItems:"center"}}>
    <Text style={{color:"#1b1a60",fontWeight:"bold"}}>$120</Text></View>
    <View style={{height:HEIGHT/18,width:WIDTH/6,elevation:10,backgroundColor:"#F5F5F5",fontWeight:"bold",borderRadius:12,justifyContent:"center",alignItems:"center"}}>
    <Text style={{color:"#1b1a60",fontWeight:"bold"}}>$125</Text></View>
</View>

<View style={{flexDirection:"row",marginTop:"15%",marginHorizontal:"9%",justifyContent:"space-between"}}>

<View style={{height:HEIGHT/18,width:WIDTH/7,elevation:10,backgroundColor:"#1b1a60",fontWeight:"bold",borderRadius:12,justifyContent:"center",alignItems:"center",marginTop:"3%"}}>
<AntDesign name="minus" size={36} color="#fff" /></View>
<View>
<Text style={{Color:"#1b1a60",fontSize:36,fontWeight:"bold" }} >$110</Text>
<Text style={{fontSize:13,color:"grey"}} >Current Bid</Text>

</View>
<View style={{height:HEIGHT/18,width:WIDTH/7,elevation:10,backgroundColor:"#1b1a60",fontWeight:"bold",borderRadius:12,justifyContent:"center",alignItems:"center",marginTop:"3%"}}>
<AntDesign name="plus" size={36} color="#fff" /></View>
</View>
<View>
<TouchableOpacity style={{backgroundColor:"#1b1a60",alignItems:"center",borderRadius: 16,
              padding:16,marginHorizontal:"9%",marginTop:"17%"  }}  onPress={() => refRBSheet.current.close()} >
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


});


export default ProductDetailScreen;