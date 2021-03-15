import React,{useState,Fragment} from 'react';
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
    SafeAreaView,
} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../components/Header'
import {sendMessageApi,getMessagesApi} from "../apis/messagesApi/messagesApi";
import {getUserId} from '../apis/LocalDB';
import moment from 'moment';
import io from "socket.io-client";
function ChatScreen ({route,navigation}) {
    const {receiver_id,id,first_name,last_name} = route.params
    const [userId,setUserId] = useState('')
    const [chat,setChat]=useState([])
    const [textInput,setTextInput]=useState('')

    useFocusEffect(
        React.useCallback(() => {
        getMessagesList()
        const socket= io("https://e-bit-point-apis.herokuapp.com")
        socket.on("chat message", msg => {
            setChat([...chat, msg])
       });
    }, [])
    );

    const getMessagesList=async()=>{
        getUserId(async(user) => {
        console.log('userid',user)
        console.log("receiver_id",receiver_id)
        setUserId(user)
        await getMessagesApi(user,receiver_id).then((response)=>{
            //console.log("response:",response);
            setChat(response)
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
                {moment(date).format('LT').toString()}
            </Text>
        );
    }
    
    const sendMessage = async()=>{
    await sendMessageApi(userId,receiver_id,textInput).then((response)=>{
        console.log("response:",response)
        setTextInput("");
        chat.push(response);
    }).catch((error)=>{
        console.log("error:",error)
    })
    }

    return (
         <Fragment>
      <SafeAreaView style={{ flex:0, backgroundColor: '#fff' }} />
      <SafeAreaView style={{ flex:1, backgroundColor: '#F76300' }}>
        <View style={styles.container} >
              <Header text={first_name + " " + last_name} navigation={navigation} isBack={true} drawer={false}/>
                <FlatList style={styles.list}
                    data={chat}
                    keyExtractor={(item,index) => index.toString()}
                    renderItem={({item}) => {
                        let inMessage = item.sender_id == id;
                        let itemStyle = inMessage ? styles.itemOut: styles.itemIn;
                        return (
                            <View style={[styles.item, itemStyle]}>
                                <View style={[styles.balloon]}>
                                    <Text numberOfLines={8}>{item.message}</Text>
                                </View>
                                {renderDate(item.createdAt)}
                            </View>
                        )
                    }} />
                <View style={styles.footer}>

                    <AntDesign name='pluscircleo' size={20} style={styles.plusIcon} />
                    <View style={styles.inputContainer}>
                        <TextInput 
                            value={textInput}
                            style={styles.inputs}
                            placeholder="Write a message..."
                            underlineColorAndroid='transparent'
                            onChangeText={(val) => setTextInput(val)} />
                    </View>

                    <TouchableOpacity style={styles.btnSend} onPress={sendMessage}>
                        <MaterialIcons name='send' size={26} color='gray' />
                    </TouchableOpacity>
                </View>
            </View>
            </SafeAreaView>
            </Fragment>
        );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    list: {
        paddingHorizontal: wp('5%'),
    },
    footer: {
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
        height: hp('8%'),
        backgroundColor: '#F76300',
        zIndex:100,
        paddingHorizontal: wp('4%'),


    },
    btnSend: {
        width: wp('8%'),
        height: hp('5%'),
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#E9EEF2',
        borderRadius: 40,
        borderBottomWidth: 1,
        height: hp('6%'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        flex: 0.9,

    },
    inputs: {
        height: hp('8%'),
        marginLeft: wp('2%'),
        fontSize:10,
        
        borderBottomColor: '#FFFFFF',
        flex: 1,



    },
    balloon: {
        width: wp('60%'),
        padding: 5,
        justifyContent: 'center'

    },
    itemIn: {

        alignSelf: 'flex-start',
        backgroundColor: '#f7f7f7',
    },
    itemOut: {
        alignSelf: 'flex-end',
        backgroundColor: '#C9D3DD',
    },
    time: {
        alignSelf:'flex-end',
        paddingHorizontal:10,
        fontSize: 12,
        color: "#545359",

    },
    item: {
        marginVertical: hp('1%'),
        flex: 1,
        backgroundColor: "#eeeeee",
        borderRadius: 10,


    },

    underHeaderView:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal:5,
        alignItems:'center',
        borderBottomWidth:1,borderBottomColor:'#f76300',
    paddingVertical:15    },
    topText1:
    {
        fontWeight: 'bold',
        fontSize:20,
        color:'#f76300'
    },
    topText2:
    {
        fontWeight: "bold",
    }


});

export default ChatScreen;