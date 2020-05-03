import React ,{useState} from "react";
import { View,Button,Text,FlatList,StyleSheet} from "react-native";


const randomRgb= ()=>{
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);

    return `rgb(${red},${green},${blue})`;
}

const ColorScreen = () =>{
    const [colors,setColors] = useState([]);
    return(
        <View style={styles.container}>
            <Text style={styles.textFont}>Add More Colors To Your Life</Text>
            <Button title="Add Color" 
                onPress={()=>{setColors([...colors,randomRgb()])}}
            />
            
            <FlatList
            keyExtractor={(item)=>item}
            data={colors}
            renderItem={({item})=>{
                return <View style={{width:100,height:100,backgroundColor:item,marginTop:10 }}/>
            }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft:10
    },
    textFont:{
        fontSize:25,
        marginBottom:5
    }
});

export default ColorScreen;
