import React,{useState} from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View,SafeAreaView,Dimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Header from '../components/Header'
const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;
import { AntDesign } from '@expo/vector-icons';


export default function EditProfile({navigation}) {

    const [firstName, setfirstName] = useState("");
const [lastName,setlastName]= useState("");
const [Address, setAddress] = useState("");
const[Email,setEmail]= useState("");
const[Phone,setPhone]=useState("");
    return (
        <SafeAreaView>
        <View style={styles.container}>
        <Header text = "Profile" navigation={navigation} drawer={true} isBack={true}/>
<View style={{marginHorizontal:"6%"}}>
<ScrollView>
<Text style={styles.heading}>First Name</Text>
<TextInput style={styles.input}
underlineColorAndroid="transparent"
placeholder="First Name"
value={firstName}
onChangeText={text=> setfirstName(text)}
>
 </TextInput>

<Text style={styles.heading}>Last Name</Text>


<TextInput style={styles.input}


underlineColorAndroid="transparent"
onChangeText={text => setlastName(text)}
value={lastName}
placeholder="Last Name"



/> 
<Text style={styles.heading}>Address</Text>
<TextInput 
style={styles.input}
placeholder="Address"
value={Address}
onChangeText={text =>setAddress(text)}
/> 
<Text style={styles.heading}>Email</Text>
<TextInput style={styles.input}
textContentType="emailAddress"
underlineColorAndroid="transparent"
onChangeText={text => setEmail(text)}
placeholder="Email"
value={Email}
 />
<Text style={styles.heading}>Phone</Text>
<TextInput
style={styles.input}
textContentType="telephoneNumber"
keyboardType="number-pad"
underlineColorAndroid="transparent"
onChangeText={text => setPhone(text)}
placeholder="Phone"
value={Phone}

/>
<View style={{borderBottomColor:'grey',borderBottomWidth:0.5}}/>
</ScrollView>
{/*<LinearGradient
colors={["#4B1A7B","#4C1A7B","#531B7F"]}
 style={{height:HEIGHT/4.3,width:WIDTH-50,backgroundColor:"#38116A",borderRadius:19, marginTop:"6%"}}>
<View style={{flexDirection:"row",justifyContent:"space-between",marginTop:"5%",marginLeft:"4%",}}>
<Text style={{color:"#fff",fontSize:14}}>Mary Smith</Text>
<View style={{height:HEIGHT/23,width:WIDTH/12,backgroundColor:"#fff",borderRadius:28, marginRight:"4%",justifyContent:"center",alignItems:"center"}}>
<AntDesign name="check" size={30} color="#531B7F"  />
</View>
 </View>

<View  style={{marginLeft:"4%",marginTop:"1%"}}>
<MaterialCommunityIcons name="card-bulleted-outline" size={30} color="#fff" />

<Text style={{marginLeft:"1%",marginTop:"2%",color:"#fff"}}>4771 5568 5693 4587</Text>
</View>

<View style={{flexDirection:"row",marginTop:"6%",marginLeft:"4%",justifyContent:"space-between"}}>
<Text style={{fontSize:12,color:"#fff"}}>Valid Thru <Text style={{fontSize:12,color:"#fff"}}> 09/26</Text></Text>
<Text style={{fontSize:16,color:"#fff",fontWeight:"bold",marginRight:"3%"}}>VISA</Text>
</View>
</LinearGradient>
*/}
<View style={{}}>
<TouchableOpacity style={styles.save}>
<Text style={{color:"#fff",fontSize:16,fontWeight:"bold"}}>Save</Text>

</TouchableOpacity>
</View>

</View>
</View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
container:{
marginTop:"5%"
},
heading:{
color:"#f76300",
fontSize:12,
marginTop:"10%"
},
input:{
borderBottomWidth:0.4,
borderBottomColor:"grey",
// paddingVertical:12,

// marginTop:"2%",
color:"#505050"

},
save:{
    height:HEIGHT*0.06,width:WIDTH-40,backgroundColor:"#f76300",marginTop:"30%",borderRadius:16,justifyContent:"center",alignItems:"center",
}

})