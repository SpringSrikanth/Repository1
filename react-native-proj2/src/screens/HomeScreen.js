import React from 'react';
import { View,Text,Button,TouchableOpacity,StyleSheet } from 'react-native';

const HomeScreen =({navigation})=>{
    return (
        <View>
            <Text style={styles.textStyle}>HomeScreen</Text>
            <Button 
                title='Go to Components Screen'
                onPress={()=>{navigation.navigate('Components');}}
            >
            </Button>
            <TouchableOpacity
                onPress={()=>{navigation.navigate('Sample');}}
            >
               <Text style={styles.buttonText}>Go to Sample Screen</Text>
            </TouchableOpacity>
            <Button
                title='Go to Greetings Screen'
                onPress={()=>{navigation.navigate('Greetings');}}
            >
            </Button>
            <Button title='Go to List Screen'
                onPress={()=>{navigation.navigate('List')}}
            >
            </Button>
            <Button
                title='Go to Images Screen'
                onPress={()=>{navigation.navigate('Image')}}
            >
            </Button>
            <Button 
            title="Go to Counter Screen"
            onPress={()=>{navigation.navigate('Counter')}}
            >
            </Button>
            <Button 
            title="Go to Colors Screen"
            onPress={()=>{navigation.navigate('Color')}}
            ></Button>
            <Button
            title="Go to Square Screen"
            onPress={()=>{navigation.navigate('Square')}}
            >
            </Button>
            <Button
            title="Go to Text Screen"
            onPress={()=>{navigation.navigate('Text')}}
            >
            </Button>
            <Button 
            title ="Go to Text Screen Two"
            onPress={()=>{navigation.navigate('TextScreenTwo')}}
            ></Button>
        </View>
    );
}
const styles=StyleSheet.create({
    textStyle: {
        fontSize:34,
        fontWeight:"bold",
    },
    buttonText:{
        textAlign:"center",
        marginVertical:20
    }
})

export default HomeScreen;