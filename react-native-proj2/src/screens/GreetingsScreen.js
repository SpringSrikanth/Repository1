import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

function greeting(){
    const date = new Date();
    const hours=date.getHours()
    console.log(hours)
    let message='';

        if(hours>0 && hours<12){
           return'Good Morning';
        }
        else if(hours>12 && hours<17){

            return 'Good Afternoon';
        }
       else if( hours>17 && hours<20){
           return 'Good Evening';
       }
       else if( hours>21 && hours<24)
       {
           return 'Good Night';
       }
    return message;
}


const GreetingScreen =()=>{
    const message=greeting();
    return (
        <View>
            <Text style={styles.textFont}>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textFont:{
        fontSize:25
    }
})

export default GreetingScreen;