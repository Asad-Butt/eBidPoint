import React,{useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    TextInput,
    FlatList,
    Button,
    SafeAreaView
} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


function ChatListScreen ({navigation}) {
    const [data,setData]=useState( [
                { id: 1, date: "9:50 am", url:"https://www.thenews.com.pk/assets/uploads/updates/2020-10-12/728383_9229385_turg_updates.jpg", name: 'usama', message: "I have to complete..." },
                { id: 2, date: "10:50 am", url:"https://www.thenews.com.pk/assets/uploads/updates/2020-10-12/728383_9229385_turg_updates.jpg", name: 'asad', message: "What do u mean..." },
                { id: 3, date: "9:50 am", url:"https://www.thenews.com.pk/assets/uploads/updates/2020-10-12/728383_9229385_turg_updates.jpg", name: 'ibrahim', message: "How much you wanted $..." },
                { id: 4, date: "3:40 am", url:"https://www.thenews.com.pk/assets/uploads/updates/2020-10-12/728383_9229385_turg_updates.jpg", name: 'cheema', message: "In those page when i click the buttons ,this is linked to another urls..." },
                { id: 5, date: "9:30 am", url:"https://www.thenews.com.pk/assets/uploads/updates/2020-10-12/728383_9229385_turg_updates.jpg", name: 'munir', message: "This will  be needed.." },
                { id: 6, date: "7:50 am", url:"https://www.thenews.com.pk/assets/uploads/updates/2020-10-12/728383_9229385_turg_updates.jpg", name: 'usman', message: "Only make 3 pages.." },
                { id: 7, date: "6:20 am", url:"https://www.thenews.com.pk/assets/uploads/updates/2020-10-12/728383_9229385_turg_updates.jpg", name: 'sultan', message: "Let me now  u decide" },
                { id: 8, date: "9:50 am", url:"https://www.thenews.com.pk/assets/uploads/updates/2020-10-12/728383_9229385_turg_updates.jpg", name: 'butt', message: "Always here to help.." },
                { id: 9, date: "4:50 am", url:"https://www.thenews.com.pk/assets/uploads/updates/2020-10-12/728383_9229385_turg_updates.jpg", name: 'ahmad', message: "when you are online" },
            ])
    const renderDate = (date) => {
        return (
            <Text style={styles.time}>
                {date}
            </Text>
        );
    }

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.underHeaderView}>
                    <View style={{marginLeft:10}}/>
                    <Text style={styles.topText1}>Chat</Text>
                    <Ionicons name="search" size={24} color="#F76300" />
                </View>
                <FlatList style={styles.list}
                    data={data}
                    keyExtractor={(item) => {
                        return item.id.toString();
                    }}
                    renderItem={(message) => {
                        console.log(item);
                        const item = message.item;
                        return (
                            <TouchableOpacity onPress={()=>navigation.navigate("ChatScreen")} style={styles.item}>
                                <View style={{paddingVertical:2,flexDirection:'row',justifyContent:'center'}}>
                              <View style={{
                                  height:60,
                                  borderRadius:20,
                                  width:60,
                                  alignItems:'center',
                                  justifyContent:'center',
                                  backgroundColor:'#2b2d3e'
                              }}>
                                  <Entypo name="user" color={'#f76000'} size={40}/>
                                  </View> 
                              <View style={{flex:1,paddingLeft:10,justifyContent:"space-around"}}>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>  
                                <Text style={{fontSize:20,fontWeight:"bold"}}>{item.name}</Text>
                                {renderDate(item.date)}
                                </View>
                                <Text numberOfLines={1} style={{color:'black',marginRight:20}}>{item.message}</Text>
                              </View>  
                              </View>
                              <View style={{width:'100%',height:.1,borderWidth:0.5,borderColor:'grey',marginTop:5}}/>
                            </TouchableOpacity>
                        )
                    }} />
              </SafeAreaView>
        );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    list: {
        paddingHorizontal: wp('3%'),
        marginTop:15
    },
    balloon: {
        padding: 5,
        flexDirection:'row',
        justifyContent: 'center'
    },
    time: {
        fontSize: 12,
        color: "#545359",

    },
    item: {
        marginVertical: hp('0.5%'),
        // flex: 1,
    },

    underHeaderView:
    {
        backgroundColor: '#fff', 
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal:15,
        alignItems: "center",
        paddingVertical:14,
        borderBottomColor:"#F76300",
        borderBottomWidth:1
    },
    topText1:
    {
        flex:1,
        textAlign:'center',
        fontWeight: 'bold',
        fontSize:20,
        color:'#F76300'
    },
    shadow:{
        shadowColor:'grey',
        shadowOffset:{width:0,height:1},
        shadowOpacity:0.8,
        shadowRadius:3,
        elevation:2,
        backgroundColor:'white'
    },
});

export default ChatListScreen;