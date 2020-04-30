import React from 'react';
import { View,Text,StyleSheet } from "react-native";
import ImageDetails from "../screens/components/ImageDetails";

const ImageScreen = () =>{
    return(
        <View style={styles.viewStyle}>
            <ImageDetails 
              title="Forest" 
              imageSource={require('../../assets/images/forest.jpg')}
              score={6}
              />
            <ImageDetails 
              title="Beach"  
              imageSource={require('../../assets/images/beach.jpg')}
              score={9}
              />
            <ImageDetails 
              title="mountain" 
              imageSource={require('../../assets/images/mountain.jpg')}
              score={2}
              />
        </View>
    );
}

const styles = StyleSheet.create({
    textFont:{
        fontSize:25
    },
    viewStyle:{
        marginLeft:10,
        marginTop:10
    }
})
export default ImageScreen;