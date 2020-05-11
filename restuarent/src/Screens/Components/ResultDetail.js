import React from "react";
import { View,Text,Image,StyleSheet } from "react-native";

const ResultDetail = ({result,baseImgUri}) => {
    const imageUrl = baseImgUri+'/'+result.image;
    return(
        <View style={{marginLeft:10}}>
            <Image style={styles.image} source={{uri: imageUrl}}/>
            <Text style={styles.title}>{result.title}</Text>
            <Text>Total Servings-{result.servings}</Text>
            <Text>Ready In-{result.readyInMinutes} Minutes</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width:250,
        height:120,
        borderRadius:4
    },
    title:{
        fontSize:15.4,
        fontWeight:"bold"
    }

});

export default ResultDetail;