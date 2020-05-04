import React from "react";
import { View,Text,StyleSheet } from "react-native";

const FlexModelScreen = () => {
    return (
        <View style={styles.parentViewStyle}>
            <View style={styles.childViewOneStyle}/>
            <View style={styles.childViewParent}>
              <View style={styles.childViewTwoStyle}/>
            </View>
            <View style={styles.childViewThreeStyle}/>
        </View>
    )
}

const styles = StyleSheet.create({
    parentViewStyle:{
        margin:10,
        height:200,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    childViewOneStyle:{
      height:50,
      width:50,
      backgroundColor:'red'
    },
    childViewTwoStyle:{
      height:50,
      width:50,
      backgroundColor:'green'
    },
    childViewParent:{
      height:100,
      justifyContent:'flex-end'
    },
    childViewThreeStyle:{
      height:50,
      width:50,
      backgroundColor:'purple'
    }
})

export default FlexModelScreen;
