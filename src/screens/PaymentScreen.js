import React, { Component } from "react";
import { StyleSheet, View,Dimensions,TouchableOpacity,Text } from "react-native";
import Header from '../components/Header';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

const s = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
     marginTop:"5%",
  },
  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 12,
    color: "black",
  },
});

const USE_LITE_CREDIT_CARD_INPUT = false;

export default class Payment extends Component {
 
  _onChange = formData => {
    /* eslint no-console: 0 */
    console.log(JSON.stringify(formData, null, " "));
  };

  _onFocus = field => {
    /* eslint no-console: 0 */
    console.log(field);
  };

  render() {
    console.disableYellowBox = true;
    return (
      <View style={s.container}>
                        <Header text='Payment' navigation={this.props.navigation} isBack={true} drawer={true}/>
          <View style={{marginTop:50}}/>
        { USE_LITE_CREDIT_CARD_INPUT ?
          (<LiteCreditCardInput
              autoFocus
              inputStyle={s.input}
              validColor={"black"}
              invalidColor={"red"}
              placeholderColor={"darkgray"}

              onFocus={this._onFocus}
              onChange={this._onChange} />) :
            (<CreditCardInput
                autoFocus

                requiresName
                requiresCVC
                requiresPostalCode

                labelStyle={s.label}
                inputStyle={s.input}
                validColor={"black"}
                invalidColor={"red"}
                placeholderColor={"darkgray"}

                onFocus={this._onFocus}
                onChange={this._onChange} />)
        }
        {this.props.route.params !=undefined && <TouchableOpacity onPress={()=>{this.props.navigation.navigate(
          "RatingScreen",{
            "shippmentAddress":this.props.route.params.shippmentAddress,
            "product":this.props.route.params.product
          }
        )}} style={{backgroundColor:"#1b1a60",alignItems:"center",marginTop:50,marginHorizontal:20,borderRadius: 14,
            marginBottom:20,  height:HEIGHT*0.06,justifyContent:'center'  }} >
         <Text style={{color:"#fff",fontWeight:"bold"}}>Finalize</Text>
        </TouchableOpacity>}
      </View>
    );
  }
}
