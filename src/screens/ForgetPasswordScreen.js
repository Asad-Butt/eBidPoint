import React, { useState,useEffect } from "react";
import LinearGradient from "expo-linear-gradient";

import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Platform,
  StatusBar,
  SafeAreaView,
  Alert
} from "react-native";
// import {passwordReset} from '../API/firebaseMethods';


const HEIGHT = Dimensions.get("screen").height;
const WIDTH = Dimensions.get("screen").width;

function ForgetPasswordScreen({navigation}) {
    const [mail,setmail]=useState("")

   
    const handlePress = () => {
        if (!mail) {
          Alert.alert('Email field is required.');
        }
    
       
         else
         {
           Alert.alert('Check your Email to Reset The Password')
        //   passwordReset(mail);
          navigation.navigate('Login')
        
          

         }
       
      };
    

  return (
    <SafeAreaView style={styles.container}>
      {/* <Image
        source={require('../../assets/logo.png')}
        style={styles.image}
      /> */}

      <Text style={styles.login}>
        Welcome to
        <Text style={{ ...styles.login, color: "#A972CF" }}>
          {" "}
          Pr<Text style={{ ...styles.login, color: "#DC234F" }}>od</Text>
          <Text style={{ ...styles.login, color: "#A048A8" }}>Me</Text>
        </Text>
      </Text>

      <Text style={{ ...styles.login, color: "#DC234F" }}>Forgot Password</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="Email Address"
          value={mail}
          onChangeText={(text)=>setmail(text)}
        />

      

        <TouchableOpacity
        onPress={handlePress}
          style={{ height: "100%" }}
          activeOpacity={0.9}
          style={{
            marginTop: "6.5%",
          }}
        >
          <LinearGradient
            
            colors={["#A972CF", "#A048A8", "#DC234F"]}
            style={{
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              padding: 14,
              borderRadius: 14,
            }}
          >
            <Text
              style={{ color: "#ffffff", fontSize: 16, fontWeight: "bold" }}
            >
              {" "}
              Reset{" "}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
container:{

    paddingTop:Platform.OS==='android'?StatusBar.currentHeight:0,
},

  image: {
    height: HEIGHT / 8,
    width: WIDTH / 3.3,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 30,
  },
  login: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#5B5B5B",
    alignSelf: "center",
    marginTop: 20,
  },
  input: {
    fontSize: 14,
    padding: 14,
    borderRadius: 14,
    borderColor: "#A3A4AA",
    borderWidth: 0.5,
    marginTop: "6.5%",
  },
  form: {
    marginHorizontal: "5%",
    marginTop: "6%",
  },
  bottom: {
    marginTop: "12%",
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default ForgetPasswordScreen;
