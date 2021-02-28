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


function ChatScreen ({navigation}) {
    const [data,setData]=useState( [
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
                    <Ionicons name="chevron-back-outline" onPress={()=>navigation.goBack()} size={28} color="black" />
                    <Text style={styles.topText1}>Name</Text>
                    <Entypo name="dots-three-vertical" size={24} color="black" />
                </View>
                <FlatList style={styles.list}
                    data={data}
                    keyExtractor={(item) => {
                        return item.id.toString();
                    }}
                    renderItem={(message) => {
                        console.log(item);
                        const item = message.item;
                        let inMessage = item.type === 'in';
                        let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
                        return (
                            <View style={[styles.item, itemStyle]}>
                                <View style={[styles.balloon]}>
                                    <Text numberOfLines={8}>{item.message}</Text>
                                </View>
                                {renderDate(item.date)}
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
            </SafeAreaView>
        );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E9EEF2"
    },
    list: {
        paddingHorizontal: wp('5%'),
    },
    footer: {
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
        height: hp('8%'),
        backgroundColor: '#fff',
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
        backgroundColor: '#FFFEFF',
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
        backgroundColor: '#fff', 
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal:5,
        alignItems: "center",
        height: hp('8.5%')
    },
    topText1:
    {
        fontWeight: 'bold',
        fontSize:20
    },
    topText2:
    {
        fontWeight: "bold",
    }


});

export default ChatScreen;