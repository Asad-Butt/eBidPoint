import React,{useEffect, useState} from 'react';
import {View, Text, SafeAreaView,StyleSheet,Dimensions} from 'react-native';
import {getUserId} from '../apis/LocalDB';
import {fetchProfileApi} from '../apis/userApis/UserApis';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../components/Header';

function ProfileScreen({navigation}){
    const HEIGHT = Dimensions.get("screen").height;
    const WIDTH = Dimensions.get("screen").width;
    const [profileInfo,setProfileInfo] = useState();

 useEffect(()=>{
  getProfileInfo()
 },[])

 const getProfileInfo=async()=>{
    getUserId(async(user) => {
    console.log('userid',user)
    await fetchProfileApi(user).then((response)=>{
        console.log("response:",response);
        setProfileInfo(response)
    }).catch((e)=>{
        console.log("error:",e)
      })
    }).catch(error => {
        console.log("error:",error)
      })
  }

return(
<SafeAreaView>
<Header text = "Profile" navigation={navigation} drawer={true} isBack={false}/>
<View style={{marginHorizontal:15}}>
<View style={{flexDirection:"row",marginTop:"5%",alignItems:"center",}}>
<View style={{backgroundColor:"#f76300",padding:10,borderRadius:20, justifyContent:"center",alignItems:"center"}}>
<Entypo name="user" size={18} color="#fff" />
</View>
<Text style={{...styles.heading,marginLeft:"3%",marginBottom:"8%",color:"black"}}>Profile</Text>

</View>
<Text style={{...styles.heading,marginTop:"0.5%",fontSize:13}}>First Name</Text>
<Text style={styles.input}>{profileInfo!==undefined && profileInfo.first_name}</Text>
<View style={styles.separator}/>

<Text style={{...styles.heading,fontSize:13}}>Last Name</Text>
<Text style={styles.input}>{profileInfo!==undefined && profileInfo.last_name}</Text> 
<View style={styles.separator}/>
<View style={{flexDirection:"row",marginTop:"5%",alignItems:"center",}}>
<View style={{backgroundColor:"#f76300",padding:10,borderRadius:20, justifyContent:"center",alignItems:"center"}}>
<MaterialIcons name="location-on" size={20} color="#fff" />
</View>
<Text style={{...styles.heading,marginLeft:"3%",marginBottom:"8%",color:"black"}}>Address</Text>

</View> 
<View style={styles.separator}/>
<Text style={{...styles.heading,fontSize:13}}>Email</Text>
<Text style={styles.input}
>{profileInfo!==undefined && profileInfo.email}</Text>
<View style={styles.separator}/>
<Text style={{...styles.heading,fontSize:13}}>Phone</Text>
<Text style={styles.input}
>{profileInfo!==undefined && profileInfo.mobile}</Text>
<View style={styles.separator}/>

</View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    heading:{
        color:"#f76300",
        fontSize:15,
        marginTop:"10%",
        fontWeight:"bold",
        marginLeft:25
        },
        input:{
        marginLeft:25,
        marginTop:"3%",
        color:"#505050",
        fontSize:12
        },
        separator:{
            borderBottomWidth:0.7,
            marginLeft:20,
            paddingTop:5
        }

});


export default ProfileScreen;