import React from 'react';
import { View,Text,StyleSheet ,TextInput} from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({term,onTermChange,onTermSubmit}) => {
    return(
        <View style={styles.backgroundStyle}>
           <Feather name="search" style={styles.iconStyle} />
           <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus={false}
            style={styles.textInput}
            placeholder="Search"
            value={term}
            onChangeText={newTerm =>{ onTermChange(newTerm)}}
            onEndEditing={onTermSubmit}
           />
        </View>
    )
}


const styles= StyleSheet.create({
    backgroundStyle:{
        marginTop:8,
        marginHorizontal:10,
        backgroundColor:"#F0EEEE",
        height:50,
        borderRadius:6,
        borderWidth:1,
        borderColor:"grey",
        flexDirection:"row",
        marginBottom:10
    },
    textInput:{
        flex:1,
        fontSize:22
    },
    iconStyle:{
        fontSize:30,
        alignSelf:"center",
        marginHorizontal:10
    }
    
})

export default SearchBar;