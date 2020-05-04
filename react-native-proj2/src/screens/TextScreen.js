import React,{useState} from "react";
import { View,Text,StyleSheet,TextInput } from "react-native";

const TextScreen = ()=>{
    const [name ,setName] =useState('');
    return (
        <View>
            <Text >Enter Your Name:</Text>
            <TextInput 
                style={styles.textInput}
                autoCapitalize="none"
                autoCorrect={false}
                autoFocus={true}
                value={name}
                onChangeText={newValue => setName(newValue)}
                />
            <Text>Entered Name {name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textInput:{
        margin:10,
        borderColor:'black',
        borderWidth:1,
        paddingHorizontal:10,
        borderRadius:8
    }
});

export default TextScreen;