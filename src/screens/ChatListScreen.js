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
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import {lastMessagesApi} from "../apis/messagesApi/messagesApi";
import {getUserId} from '../apis/LocalDB';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


function ChatListScreen ({navigation}) {
    const [messages,setMessages]=useState()
    useFocusEffect(
        React.useCallback(() => {
        getMessagesList()
        }, [])
    );

    const getMessagesList=async()=>{
        getUserId(async(user) => {
        console.log('userid',user)
        await lastMessagesApi(user).then((response)=>{
            console.log("response:",response);
            setMessages(response)
        }).catch((e)=>{
            console.log("error:",e)
        })
        }).catch(error => {
            console.log("error:",error)
    })
    }

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
                    data={messages}
                    keyExtractor={(item,index) => index.toString()}
                    renderItem={({item}) => {
                        console.log(item);
                        return (
                            <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate("ChatScreen",{
                                email:item._id
                              })}>
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
                                <Text style={{fontSize:18,fontWeight:"bold"}}>{item._id.split("@gmail.com")}</Text>
                                {renderDate(item.lastDate)}
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