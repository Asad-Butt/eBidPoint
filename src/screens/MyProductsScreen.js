import React from 'react';
import {View, Text, SafeAreaView, StyleSheet,FlatList,Dimensions,Image,TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
function MyProductsScreen({ navigation }){
    const HEIGHT = Dimensions.get("screen").height;
const WIDTH = Dimensions.get("screen").width;

    const DATA=[
        {
            key:1,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5RRC-ZKxAkHxzJKY9sxYxyeEw1zrPQnfuog&usqp=CAU",
            title:"Painting",
            desc:"painting for sale",
            budget:"$105",
        },
        {
        key:2,
        image:"https://wallpaperaccess.com/full/2213426.jpg",
        title:"Scenery",
        desc:"Scenery Picture for sale new ",
        budget:"$95",
        },
        {
        key:3,
        image: "https://i.insider.com/5cbf5a3efa99af28517a2af2?width=1024&format=jpeg",
        title:"Cat",
        desc:"Cat for sale",
        budget:"$80",
        },
        {
            key:4,
            image: "https://www.serendipitydiamonds.com/blog/wp-content/uploads/2013/12/Rose-gold-engagement-ring-diamond-wedding-ring.jpg",
            title:"Painting",
            desc:"painting for sale",
            budget:"$105",
        },
        {
        key:5,
        image: "https://static-01.daraz.pk/p/2c0e00d091be63be5b56f0708377d65d.jpg",
        title:"Scenery",
        desc:"Scenery Picture for sale new ",
        budget:"$95",
        },
        {
        key:6,
        image: "https://img1.wsimg.com/isteam/stock/ZzVZEWD/:/cr=t:5.36%25,l:5.36%25,w:89.29%25,h:89.29%25",
        title:"Cat",
        desc:"Cat for sale",
        budget:"$80",
        },
        {
            key:7,
            image: "https://img1.wsimg.com/isteam/stock/ZzVZEWD/:/cr=t:5.36%25,l:5.36%25,w:89.29%25,h:89.29%25",
            title:"Painting",
            desc:"painting for sale",
            budget:"$105",
        },
        {
        key:8,
        image:"https://wallpaperaccess.com/full/2213426.jpg",
        title:"Scenery",
        desc:"Scenery Picture for sale new ",
        budget:"$95",
        },
        {
        key:9,
        image:"https://www.wallpapertip.com/wmimgs/30-308464_cool-profile-pictures-1080p.jpg",
        title:"Cat",
        desc:"Cat for sale",
        budget:"$80",
        },

                        
        ]
    
    return(
        <SafeAreaView>
        <View style={{marginTop:"5%"}}>
                 <View style={{flexDirection:"row",paddingVertical:15,justifyContent:"space-between",alignItems:'center',borderBottomWidth:0.5,borderBottomColor:'#f76300' }}>
            <TouchableOpacity onPress={()=> navigation.openDrawer()}>
            <Ionicons name="chevron-back-sharp" size={24} color="#f76300" style={{marginLeft:"4%"}} />
            </TouchableOpacity>
            <Text style={{fontSize:20,color:"#f76300",fontWeight:"bold"}}>My Products</Text>
            <View style={{marginRight:20}}></View>
</View>
        <View style={styles.container}>
            <Text style={styles.heading}>My Products</Text>
            </View>
            <View style={styles.list}>
            <FlatList
data={DATA}
showsVerticalScrollIndicator={false}
renderItem={({ item, index }) =>(
<View style={{flexDirection:"row",justifyContent:"space-between", marginTop:'10%',alignItems:'center'}}>
<View style={{flexDirection:"row",alignItems:'center'}}>

<Image 
key={index}
source={{uri:item.image}}
 style={{height:80,width:'35%',borderRadius:15}}


 />

<View style={{marginLeft:'4%',width:"46%"}}> 
<Text style={{color:"#1b1a60",fontSize:15,fontWeight:"bold"}}>{item.title}</Text>
<Text style={{color:"grey",fontSize:13,marginTop:5}}>{item.desc}</Text>

</View>
</View>
 <View style={{backgroundColor:"#F76300" ,justifyContent:"center",alignItems:"center",borderRadius:10,padding:10,width:'15%'}}>
<Text style={{color:'#fff',fontWeight:'bold'}}>{item.budget}</Text>
</View>

</View>
)}
/>

</View>
    




</View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
marginHorizontal:"5%"        
    },
topHeading:{
    marginTop:"5%",
    justifyContent:"center",
},
heading:
{
    color:"#f76300",
    fontSize:22,
    fontWeight:"bold",
   
},
list:{
marginBottom:"20%",
marginTop:"2%"

}    

});

export default MyProductsScreen;