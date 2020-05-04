import React from "react";
import { View,Text,StyleSheet } from "react-native";

const FlexModelScreenOld = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Child-1</Text>
            <Text style={styles.textStyle}>Child-2</Text>
            <Text style={styles.textStyle}>Child-3</Text>
            <Text style={styles.textStyle}>Child-4</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth:1,
        borderColor:'black',
        height:200,
        flexDirection:'row',
        justifyContent:'space-between'
        
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
    textStyle:{
        borderWidth:4,
        borderColor:'red',
        width:88
    }
})

export default FlexModelScreenOld;
