import React,{useState,useEffect} from 'react'
import {
    StyleSheet, Text, View, FlatList, Platform,
    TouchableOpacity, Image,
    StatusBar, Dimensions, Card,
    SafeAreaView,
    TouchableWithoutFeedback
} from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { navigationRef } from '../navigations/rootNavigation';
const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;
const DATA = [
    {
        key: '1',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5RRC-ZKxAkHxzJKY9sxYxyeEw1zrPQnfuog&usqp=CAU",
        title: 'Geneva',
        description: "Men fashion 2020 minimalist",
        time:'01h 04m 45s',
        bidAmount:'$300',
        type:'watch'
    },
    {
        key: '2',
        image: "https://i.insider.com/5cbf5a3efa99af28517a2af2?width=1024&format=jpeg",
        title: 'Decent Watch',
        description: "The best watches",
        time:'02h 14m 45s',
        bidAmount:'$140',
        type:'watch'
    },
    {
        key: '3',
        image: "https://www.serendipitydiamonds.com/blog/wp-content/uploads/2013/12/Rose-gold-engagement-ring-diamond-wedding-ring.jpg",
        title: 'Rose Gold',
        description: "Unique in it's design and quality.",
        time:'10h 54m 45s',
        bidAmount:'$100',
        type:'ring'
    },
    {
        key: '4',
        image: "https://static-01.daraz.pk/p/2c0e00d091be63be5b56f0708377d65d.jpg",
        title: 'David Clulow',
        description: "Men's glasses.",
        time:'21h 54m 45s',
        bidAmount:'$50',
        type:'glasses'
    },
    {
        key: '5',
        image: "https://img1.wsimg.com/isteam/stock/ZzVZEWD/:/cr=t:5.36%25,l:5.36%25,w:89.29%25,h:89.29%25",
        title: 'David Clulow',
        description: "Men's glasses.",
        time:'21h 54m 45s',
        bidAmount:'$50',
        type:'glasses'
    },
];

const Categories = [
    'All',
    'Watches',
    'Glasses',
    'Rings',
    'Other'
]



function ExploreScreen({ navigation }) {
    const [filter,setFilter]=useState(false)
  const [categorize, setCategory] = useState();
//   const [userId,setUserId] = useState('')
  const [categoryIndex, setCategoryIndex] = useState();
  const [products,setProducts] = useState([])
  const [customProducts,setCustomProducts] = useState([])
  const [searchBar, setSearchBar] = useState('');
  const [searchProducts,setSearchProducts] = useState([])

  useFocusEffect(
    React.useCallback(() => {
    setCategory('All');
    setProducts(DATA)
  }, [])
  );

  const renderCategoryItem = (item, index) => {
    return (
      <TouchableOpacity
        style={{marginTop:10}}
        // onPress={() => {
        //   checkPressed(item)
        //   setCategoryIndex(index);
        //   setCategory(item);
        // }}
        >
        <Text
          style={{
            alignItems: 'center',
            color: categorize == item ? '#F76300' : 'grey',
            marginHorizontal: 10,
            fontSize:16,
            marginHorizontal:20
          }}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  let checkPressed = (item) => {
    if(item == "All"){
      setCustomProducts(products)
      return
    }
    setFilter(true)
    console.log("item:",item)
    let array=[...products]
        array = array.filter(function (items) {
        let list=[];
        items.categories.filter(function (categoryValue) {
            console.log("array filter by catagory :",categoryValue)

        // const {category} = categoryValue
        // list=list.concat(category) 
        })
        // return list.includes(item)
        })
      console.log("array filter by catagory :",array)
    //   setCustomProducts(array)
  }

  let onChangeText= (text) => {
    setSearchBar(text)
    let array=[]
    {filter ? array=[...customAssignment] : array=[...assignment]}
      array = array.filter(function (item) {
      return item.title.includes(text)
      })
      console.log("array filter by search bar :",array)
      setSearchProducts(array)
  }

const renderItem = (item,index) => {
    return(
        <TouchableWithoutFeedback onPress={()=> navigation.navigate("ProductDetailScreen")}>
        <View style={[styles.cardView,styles.shadow]}>
            <Image source={{uri:item.image}} style={styles.cardImage} resizeMode={'stretch'}/>
            <View style={styles.description}>
                <View style={{...styles.row,justifyContent:'space-between'}}>
            <Text style={styles.productTitleText}>{item.title}</Text>
            <View style={[styles.bidView,styles.shadow]}>
                <View style={styles.row}>
                <Feather name="clock" size={18} color="#1b1a60" style={{marginLeft:5}}/>
                <Text style={styles.timeText}>{item.time}</Text>
                </View>
                <View style={{backgroundColor:'#1b1a60',padding:10}}>
                <Text style={{...styles.timeText,color:'white'}}>{item.bidAmount}</Text>
                </View>
                </View>

            </View>
            <Text style={styles.productdescriptionText} numberOfLines={2}>{item.description}</Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}



    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.input,styles.shadow,styles.row]}>
            <Ionicons name="search-outline" size={24} color="black" style={{marginHorizontal:8}}/>           
             <TextInput style={styles.inputText}
                placeholder="Search"
                // onChangeText={(text)=>onChangeText(text)}
                >
            </TextInput>
            </View>
            <View style={{margin: 7}}>
            <FlatList
              data={Categories}
              renderItem={({item, index}) => renderCategoryItem(item, index)}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item,index) => index.toString()}
            />
          </View>
          {/* {((searchBar !== "" && searchProducts.length <= 0) && products.length <= 0 || ((customProducts <= 0) && filter)) ?
          <View style={{alignSelf:'center'}}>
          <Text style={{fontSize:20}}>No data found</Text>
          </View>
          : */}
            <View style={{margin:15,marginBottom:'30%'}}>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={ DATA}
            renderItem={({item,index})=>renderItem(item,index)}
            extraData={searchBar !== "" ? searchProducts : (filter ? customProducts : DATA)}
            />
            </View>
{/* } */}
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor:'#fff'
    },
    input: {
        borderRadius: 12,
        width: WIDTH*0.9,
        paddingVertical: 8,
        marginTop:30,
        marginHorizontal:20
    },
    inputText: {
        borderRadius: 10,
        width: WIDTH*0.8,
        fontSize:14
    },
    shadow:{
        shadowColor:'grey',
        shadowOffset:{width:0,height:1},
        shadowOpacity:0.8,
        shadowRadius:3,
        elevation:2,
        backgroundColor:'white'
    },
    row:{
        flexDirection:'row',
        alignItems:'center'
    },
    cardImage:{
        height:HEIGHT*0.2,
        width:WIDTH-35,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        alignSelf:'center',
        backgroundColor:'grey'
    },
    cardView:{
        borderRadius:20,
        marginVertical:10,
        backgroundColor:'#fff',
    },
    description:{
        justifyContent:'space-between',
        padding:10,
        paddingVertical:15
    },
    bidView:{
        flexDirection:'row',
        marginTop:-40,
        borderRadius:10
        // paddingVertical:10,
        // paddingHorizontal:5
    },
    productTitleText:{
        fontSize:18,
        fontWeight:'bold',
        color:'#F76300'
    },
    productdescriptionText:{
        fontSize:15,
        color:'grey',
        marginTop:5
    },
    timeText:{
        fontSize:13,
        color:"#1b1a60",
        fontWeight:'bold',
        letterSpacing:1,
        padding:3,
        paddingHorizontal:7,
    }

})

export default ExploreScreen;