import React from "react";
import { View,Text,StyleSheet } from "react-native";

const ComonentsScreen = () =>{
    return (
        <View>
            <Text style={styles.textFont}>ComonentsScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textFont:{
        fontSize:44,
    }
})

export default ComonentsScreen;