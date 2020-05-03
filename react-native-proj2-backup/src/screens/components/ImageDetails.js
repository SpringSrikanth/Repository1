import React from 'react';
import { View,Text,StyleSheet,Image } from "react-native";

const ImageDetails = ({imageSource,title,score}) =>{
    return(
        <View>
            <Image source={imageSource}/>
            <Text style={styles.textFont}>{title} - {score}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textFont:{
        fontSize:25
    }

})
export default ImageDetails;