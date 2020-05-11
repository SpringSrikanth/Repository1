import React from "react";
import { View,Text,FlatList,StyleSheet,TouchableOpacity } from "react-native";
import ResultDetail from "../Components/ResultDetail";
const ResultList= ({title,results,imageUrl,navigation}) =>{
    if(results.length==0){
        return null;
    }
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
                        <TouchableOpacity
                          onPress={()=>{navigation.navigate("ResultShow",{id: item.id})}}
                        > 
                            <ResultDetail 
                            result={item} 
                            baseImgUri={imageUrl} />
                        </TouchableOpacity>
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