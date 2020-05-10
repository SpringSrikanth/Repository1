import React from "react";
import { View,Text,StyleSheet } from "react-native";

const RestuarentList= ({title,results}) =>{
    return(
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text>No of results {results.length}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:"bold"
    }
});

export default RestuarentList;