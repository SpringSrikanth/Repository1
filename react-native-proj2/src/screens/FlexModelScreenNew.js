import React from "react";
import { View,Text,StyleSheet } from "react-native";

const FlexModelScreenNew = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child-1</Text>
            <Text style={styles.textTwoStyle}>Child-2</Text>
            <Text style={styles.textThreeStyle}>Child-3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth:1,
        borderColor:'black',
        height:200,
       // alignItems:'center'
       /* 
          JustifyContentProperties
            justifyContent:'center'
            justifyContent:'flex-end'
            justifyContent:'flex-start' //default
            justifyContent:'space-between'
            justifyContent:'space-around'
            justifyContent:'space-evenly'
          JustifyContentProperties with flex direction: row
            justifyContent:'center'
            justifyContent:'flex-end'
            justifyContent:'flex-start' //default
            justifyContent:'space-between'
            justifyContent:'space-around'
            justifyContent:'space-evenly'


          flex model properties
            alignItems:'flex-start'
            alignItems:'flex-end'
            alignItems:'center'
            alignItems:'stretch'  defaultCase

          flexDirection properties
            flexDirection:'row',
            height:200,
            alignItems:'flex-end',


          backgroundColor:'lightblue'

        */
    },
    textOneStyle:{
        borderWidth:4,
      //  flex:1,
        flex:4,
        borderColor:'red',
       // alignSelf:'flex-end'
    },
    textTwoStyle:{
      borderWidth:4,
      flex:4,
     //alignSelf:'flex-start',
     //alignSelf:'center',
     //alignSelf:'flex-end',
     alignSelf:'stretch',
     // flex:1, ~>1
     // flex:1,
      borderColor:'red',
     // top:10
    // right:10
   // left:10
  // bottom:10
     // ...StyleSheet.absoluteFillObject
     position:'absolute',
     alignSelf:'flex-end'
     
    },
    textThreeStyle:{
      borderWidth:4,
      flex:2,
     // flex:1,
      borderColor:'red',
    }
})

export default FlexModelScreenNew;
