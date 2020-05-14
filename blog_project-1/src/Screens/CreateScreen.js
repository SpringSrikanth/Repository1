import React ,{useState} from 'react';
import {View,Text,TextInput,Button,StyleSheet} from 'react-native';

const CreateScreen = () =>{
  const [title,setTitle] = useState('');
  const [content,setContent] = useState('');
  return (
        <View style ={{margin:10}}>
            <Text style={styles.textFont}>Enter Title:</Text>
            <TextInput 
                style={styles.textInput}
                value={title}
                onChangeText={(text)=>{setTitle(text)}}
                placeholder="Title"
                placeholderTextColor="grey"
            />
            <Text style={styles.textFont}>Enter Content:</Text>
            <TextInput 
                style={styles.textInput}
                value={title}
                onChangeText={(text)=>{setTitle(text)}}
                placeholder="Content"
                placeholderTextColor="grey"
            />
            <Button
                title="Create"
                type="outline"
            />
        </View>
  );

}

const styles = StyleSheet.create({
    textInput: {
        borderColor:'grey',
        borderWidth:1,
        borderRadius:4,
        marginHorizontal:8,
        paddingVertical:6,
        marginVertical:8
    },
    textFont:{
        fontSize:20,
        fontWeight:"normal",
        marginHorizontal:8,
        marginVertical:5
    },
    

});

export default CreateScreen;