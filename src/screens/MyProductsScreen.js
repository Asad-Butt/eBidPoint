import React from 'react';
import {View, Text, SafeAreaView, StyleSheet,FlatList,Dimensions,Image} from 'react-native';

function MyProductsScreen({ navigation }){
    const HEIGHT = Dimensions.get("screen").height;
const WIDTH = Dimensions.get("screen").width;

    const DATA=[
        {
            key:1,
            image:"https://i.ytimg.com/vi/g8YbJ-1vCa0/hqdefault.jpg",
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
        image:"https://www.wallpapertip.com/wmimgs/30-308464_cool-profile-pictures-1080p.jpg",
        title:"Cat",
        desc:"Cat for sale",
        budget:"$80",
        },
        {
            key:4,
            image:"https://i.ytimg.com/vi/g8YbJ-1vCa0/hqdefault.jpg",
            title:"Painting",
            desc:"painting for sale",
            budget:"$105",
        },
        {
        key:5,
        image:"https://wallpaperaccess.com/full/2213426.jpg",
        title:"Scenery",
        desc:"Scenery Picture for sale new ",
        budget:"$95",
        },
        {
        key:6,
        image:"https://www.wallpapertip.com/wmimgs/30-308464_cool-profile-pictures-1080p.jpg",
        title:"Cat",
        desc:"Cat for sale",
        budget:"$80",
        },
        {
            key:7,
            image:"https://i.ytimg.com/vi/g8YbJ-1vCa0/hqdefault.jpg",
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
        <View style={styles.container}>
            <View style={styles.topHeading}>
            <Text style={styles.heading}>My Products</Text>
            </View>
            
            <FlatList
data={DATA}
showsVerticalScrollIndicator={false}
renderItem={({ item, index }) =>(
<View style={{flexDirection:"row",justifyContent:"space-between", marginTop:"10%"}}>
<View style={{flexDirection:"row",}}>

<Image 
key={index}
source={{uri:item.image}}
 style={{height:100,width:150,borderRadius:15}}


 />

<View style={{marginLeft:"4%",width:"35%"}}> 
<Text style={{color:"#1b1a60",fontSize:15,fontWeight:"bold"}}>{item.title}</Text>
<Text style={{color:"grey",fontSize:13}}>{item.desc}</Text>

</View>
</View>
 <View style={{backgroundColor:"#F76300" ,justifyContent:"center",alignItems:"center",borderRadius:10,padding:10,height:30,marginRight:"2%",}}>
<Text >{item.budget}</Text>
</View>

</View>
)}
/>


    




</View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
marginHorizontal:"5%"        
    },
topHeading:{
    marginTop:"15%",
    justifyContent:"center",
},
heading:
{
    color:"#f76300",
    fontSize:22,
    fontWeight:"bold",
    
}    

});

export default MyProductsScreen;