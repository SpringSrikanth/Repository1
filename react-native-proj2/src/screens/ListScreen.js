import React from "react";
import { View,Text,StyleSheet,FlatList } from "react-native";

const ListScreen = ()=>{
    const friends=[
        {name: "raju dusa" ,id:"1" ,age:22},
        {name: "harish dusa" ,id:"2",age:23},
        {name: "sanjay kondamedhi" ,id:"3",age:23},
        {name: "naveen rapelli" ,id:"4",age:21},
        {name: "saikumar lagishetti" ,id:"5",age:20},
        {name: "ravisai dusa" ,id:"6",age:22},
        {name: "surya adepu" ,id:"7",age:23},
        {name: "naresh burla" ,id:"8",age:21},
        {name: "rahul cheela" ,id:"9",age:24},
        {name: "nareshbabu gatti" ,id:"10",age:22}
    ]
    return (
        <View>
        <Text style={styles.textFont}>List of friends</Text>
        <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={friend=> friend.id}
            style={styles.listStyle}
            data={friends} 
            renderItem={ ({item}) =>
                 {
                 return (<Text style={styles.textList}>{item.id}-{item.name} Age {item.age} years old.</Text>); 
                 }
             } />
        </View>
    )
}

const styles=StyleSheet.create({
    textFont:{
        fontSize:44,
        paddingLeft:10,
        color:"white",
        backgroundColor:"grey",
    },
    listStyle:{
        paddingHorizontal:10
    },
    textList:{
        fontSize:22,
        marginVertical:50,
        backgroundColor:"grey",
    }
})

export default ListScreen;