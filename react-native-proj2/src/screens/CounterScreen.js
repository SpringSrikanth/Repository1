import React , { useReducer}from "react";
import { View,Text,Button,StyleSheet } from "react-native";

const reducer = (state,action)=> {
  // state === {counter:0}
  // action === { type  increment and decrement , payload : 1}
  switch (action.type) {
      case 'increment':
          return {...state,counter:state.counter+action.payload};
      case 'decrement':
          return {...state,counter:state.counter-action.payload};
      default:
          return state;
  }
}

const CounterScreen = ()=>{
    const [state,dispatch]=useReducer(reducer,{counter:0})
    return(
        <View>
            <Button 
                title='Increase'
                onPress={()=>{dispatch({type:'increment',payload:1})}}
            />
            <Button 
                title='Decrease'
                onPress={()=>{
                        dispatch({type:'decrement',payload:1})
                }}
            />
            <Text style={styles.textFont}>Current count:: {state.counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textFont:{
        fontSize:40
    }
})

export default CounterScreen;