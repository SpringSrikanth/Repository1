import React,{useState} from "react";
import { View,Text,StyleSheet,TextInput } from "react-native";

const TextScreenTwo = ()=>{
    const [password ,setPassword] =useState('');
    return (
        <View>
            <Text >Enter Password:</Text>
            <TextInput 
                style={styles.textInput}
                autoCapitalize="none"
                autoCorrect={false}
                autoFocus={true}
                value={password}
                onChangeText={newValue => setPassword(newValue)}
                />
            {password.length<5 ? <Text>Password must be greater than 5 characters</Text> :null} 
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

export default TextScreenTwo;