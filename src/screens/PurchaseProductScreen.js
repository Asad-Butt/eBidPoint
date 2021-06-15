import React, { useState } from 'react'
import { ActivityIndicator,StyleSheet, Text, View,Image,SafeAreaView,FlatList, TextInput,Dimensions,TouchableOpacity, ImageBackground, TouchableWithoutFeedback, ScrollView , StatusBar} from 'react-native'
import {fetchUserPurchasedProductApi} from "../apis/productApis/productApis";
import {useFocusEffect} from '@react-navigation/native';
import {getUserId} from '../apis/LocalDB';

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

export default function PurchaseProductScreen({navigation}) {
    const [product,setProduct]=useState();    
    const [visible,setVisible] = useState(true)

    useFocusEffect(
        React.useCallback(() => {
        getProduct()
        }, [])
    );
    
    const getProduct=async()=>{
        getUserId(async(user) => {
            console.log('userid',user)
        await fetchUserPurchasedProductApi(user).then((response)=>{
           console.log("response:",response.length);
           setProduct(response)
           setVisible(false)
        }).catch((e)=>{
           console.log("error:",e)
           setVisible(false)
        })
       })
    }

    const changeStatus=async(_id,status)=>{
        // console.log("id:",_id," status:",status)
        // await statusProductApi(_id,status).then((response)=>{
        //     console.log("response:",response);
        //     let totalProducts=[...product]
        //     totalProducts = totalProducts.filter(val =>val._id!==_id);
        //     setProduct(totalProducts)
        //  }).catch((e)=>{
        //     console.log("error:",e)
        //  })
    }

    return (
        <SafeAreaView style={styles.container}>
        <View style={{...styles.row,marginTop:'5%',justifyContent:'center',marginHorizontal:'5%'}}>
        <Text style={{fontSize:24,fontWeight:'bold'}}>
                Win Products Bid
        </Text>
 
        </View>
        {visible ? (
          <ActivityIndicator visible={visible} color="#F76300" size="large" />
          ) : ( product.length <= 0  ?
          <View style={{alignSelf:'center'}}>
          <Text style={{fontSize:20}}>No data found</Text>
          </View>
          :
           <FlatList
                data={product}
                style={{marginBottom:125}}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) =>{
                const {_id,imgCollection,title,price}=item
                return (
                        <View style={{ marginHorizontal: '3%', marginTop: '5%' }}>
                            <View style={{ ...styles.shadow, flexDirection: 'row', borderRadius: 20, padding: 1, alignItems: 'center', justifyContent: 'space-between' }}>
                                <View style={styles.row}>
                                    <Image style={{ height: HEIGHT * 0.1, width: WIDTH * 0.2, borderRadius: 20 }} source={{ uri: imgCollection[0] }}
                                    />
                                    <View style={{ marginLeft: '4%' }}>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#03528A', width: WIDTH * 0.33 }}>{title}</Text>
                                        <Text style={{ fontSize: 13, marginTop: 5 }}>{price}</Text>
                                    </View>
                                </View>
                                    <TouchableOpacity onPress={()=>{navigation.navigate("ShippmentScreen",{
                                        "product":item
                                    })}} style={{ paddingVertical: '3%', paddingHorizontal: '10%', backgroundColor: 'green', borderRadius: 10, justifyContent: 'center', marginRight: 10 }}>
                                        <Text style={{ ...styles.shadowText, fontSize: 14, color: 'white', fontWeight: 'bold' }}>Buy</Text>
                                    </TouchableOpacity>
                            </View>
                        </View>
                )
                }}
        />
        )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor:'white'
    },
    row:{
        flexDirection:'row',
        alignItems:'center'
    },
    type:{
        paddingHorizontal:'8%',
        paddingVertical:'3%',
        backgroundColor:'#03528A',
        marginHorizontal:2,
        borderRadius:5
    },
    typeText:{
        color:'white',
        fontSize:16,
        fontWeight:'bold',
    },
    shadow:{
        shadowColor:'grey',
        shadowOffset:{width:0,height:1},
        shadowOpacity:0.8,
        shadowRadius:3,
        elevation:2,
        backgroundColor:'white'
    },
    shadowText:{
        shadowRadius:2,
        shadowOpacity:0.8,
        shadowOffset:{width:0,height:1},
        shadowColor:'#000'
    },
})