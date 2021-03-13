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

function ChatScreen ({route,navigation}) {
    const {email} = route.params
    const [userId,setUserId] = useState('')
    const [chat,setChat]=useState( [
                { id: 1, date: "9:50 am", type: 'in', message: "I have to complete..." },
                { id: 2, date: "10:50 am", type: 'in', message: "What do u mean..." },
                { id: 3, date: "9:50 am", type: 'out', message: "How much you wanted $..." },
                { id: 4, date: "3:40 am", type: 'in', message: "In those page when i click the buttons ,this is linked to another urls..." },
                { id: 5, date: "9:30 am", type: 'in', message: "This will  be needed.." },
                { id: 6, date: "7:50 am", type: 'in', message: "Only make 3 pages.." },
                { id: 7, date: "6:20 am", type: 'out', message: "Let me now  u decide" },
                { id: 8, date: "9:50 am", type: 'in', message: "Always here to help.." },
                { id: 9, date: "4:50 am", type: 'in', message: "when you are online" },
            ])
    const [text,setText]=useState('')
    
    useFocusEffect(
        React.useCallback(() => {
        getMessagesList()
        }, [])
    );

    const getMessagesList=async()=>{
        getUserId(async(user) => {
        console.log('userid',user)
        console.log("email",email)
        setUserId(user)
        await getMessagesApi(user,email).then((response)=>{
            console.log("response:",response);
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
                {date}
            </Text>
        );
    }

        return (
         <Fragment>
      <SafeAreaView style={{ flex:0, backgroundColor: '#fff' }} />
      <SafeAreaView style={{ flex:1, backgroundColor: '#F76300' }}>
        <View style={styles.container} >
              <Header text={email.split("@gmail.com")} navigation={navigation} isBack={true} drawer={false}/>
                <FlatList style={styles.list}
                    data={chat}
                    keyExtractor={(item,index) => index.toString()}
                    renderItem={({item}) => {
                        console.log(item);
                        let inMessage = item.email === email;
                        let itemStyle = inMessage ? styles.itemOut : styles.itemIn;
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
                        <TextInput style={styles.inputs}
                            placeholder="Write a message..."
                            underlineColorAndroid='transparent'
                            onChangeText={(text) => setText(text)} />
                    </View>

                    <TouchableOpacity style={styles.btnSend}>
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
        width: wp('35%'),
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