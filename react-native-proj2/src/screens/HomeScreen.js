import React from 'react';
import { View,Text,Button,StyleSheet } from 'react-native';

const HomeScreen =(props)=>{
    return (
        <View>
            <Text style={styles.textStyle}>HomeScreen</Text>
            <Button 
                title='Go to Components Screen!'
                onPress={()=>{props.navigation.navigate('Components');}}
            ></Button>
            <Button
                title='Go to Sample Screen'
                onPress={()=>{props.navigation.navigate('Sample');}}
            ></Button>
            <Button
                title='Go to Greetings Screen'
                onPress={()=>{props.navigation.navigate('Greetings');}}
            >
            </Button>
        </View>
    );
}
const styles=StyleSheet.create({
    textStyle: {
        fontSize:34,
        fontWeight:"bold",
    }
})

export default HomeScreen;