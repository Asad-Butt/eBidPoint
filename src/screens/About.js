import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function About() {
    return (
        <SafeAreaView>
                  <View style={{flexDirection:"row",marginTop:"12%",justifyContent:"space-between" }}>
            <Ionicons name="chevron-back-sharp" size={24} color="#f76300" style={{marginLeft:"4%"}} />
            
            <Text style={{fontSize:16,color:"#f76300",fontWeight:"bold"}}>About</Text>
            <View></View>
            </View>
<View style={styles.container}>

<Text style={styles.about}>
Welcome to <Text style={{...styles.about,color:"#f76300"}}>eBidPoint</Text> Here you can find  discounted, clearance & on-sale items for sale around you.
</Text>
<Text style={styles.about}>
• Here you can easily Communicate, Message and Chat instantly with buyers.
</Text>
<Text style={styles.about}>
• Firstly, you have to search quickly and easily for new or used items that you love to Buy.
</Text>
<Text style={styles.about}>
• Then you have to post your used or new stuff that you want to sell in seconds!

</Text>
<Text style={styles.about}>
• Just take a photo, add a description and your item is ready for sale or auction. It's as easy as taking a Selfie!
</Text>
<Text style={styles.about}>
• Then you have to Chat or Message with your interested buyers and quickly get offers & counter-offers right on your smartphone!

</Text>

</View>






        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
container:{
marginHorizontal:"9%",
marginTop:"8%",
},
about:{
fontSize:16,

marginTop:"6%"


}

})
