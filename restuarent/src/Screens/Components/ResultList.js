import React from "react";
import { View,Text,FlatList,StyleSheet } from "react-native";
import ResultDetail from "../Components/ResultDetail";

const ResultList= ({title,results,imageUrl}) =>{
    return(
        <View style={{marginBottom:10}}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
             data={results}
             horizontal
             keyExtractor={(result)=>JSON.stringify(result.id)}
             showsHorizontalScrollIndicator={false}
             renderItem={({item})=>{
                 return (
                        <ResultDetail result={item} baseImgUri={imageUrl} />
                        )
             }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:"bold",
        marginLeft:10
    }
});

export default ResultList;