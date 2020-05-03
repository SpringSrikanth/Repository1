import React from 'react';
import { View,Text,StyleSheet } from "react-native";

const SampleScreen=()=>{
    const greeting =<Text style={{fontSize:20}}>My Name is Srikanth Yenagandula!</Text>
    return (
        <View>
            <Text style={styles.textFont}>Getting Started With React Native</Text>
            {greeting}
        </View>
    );
}

const styles=StyleSheet.create({
    textFont:{
        color:"red",
        fontSize:45
    }

})

export default SampleScreen;