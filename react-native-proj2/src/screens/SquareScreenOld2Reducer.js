import  React ,{useReducer}from "react";
import { View,Text,StyleSheet } from "react-native";
import ColorCounter from "./components/ColorCounter";

const COLOR_INCREMENT=10;

const reducer = (state,action)=>{
    //state === {red:0,blue:0,green:0}
    //action === {colorToChange:string 'red' || 'blue'|| green ,amountOfChange:number -15 || 15}
    switch (action.colorToChange) {
        case 'red':
            return state.red+action.amountOfChange >255 || state.red+action.amountOfChange < 0
            ? state
            : {...state,red : state.red+action.amountOfChange};
        case 'blue':
            return state.blue+action.amountOfChange >255 || state.blue+action.amountOfChange < 0
            ? state
            : {...state , blue : state.blue+action.amountOfChange};
        case 'green':
            return state.green+action.amountOfChange >255 || state.green+action.amountOfChange < 0
            ? state
            : {...state , green : state.green+action.amountOfChange};
        default:
        return state;
    }

}


const SquareScreenOld2Reducer =()=>{
    const [state,dispatch]=useReducer(reducer,{red:0,green:0,blue:0});
    const {red,green,blue} =state;
    return (
        <View>
            <ColorCounter 
            color="Red" 
            onIncrease={()=>dispatch({colorToChange:'red',amountOfChange:COLOR_INCREMENT})}
            onDecrease={()=>dispatch({colorToChange:'red',amountOfChange:-1*COLOR_INCREMENT})}
            />
            <ColorCounter 
            color="Green"
            onIncrease={()=>dispatch({colorToChange:'green',amountOfChange:COLOR_INCREMENT})}
            onDecrease={()=>dispatch({colorToChange:'green',amountOfChange:-1*COLOR_INCREMENT})}
            />
            <ColorCounter 
            color="Blue"
            onIncrease={()=>dispatch({colorToChange:'blue',amountOfChange:COLOR_INCREMENT})}
            onDecrease={()=>dispatch({colorToChange:'blue',amountOfChange:-1*COLOR_INCREMENT})}
            />
            <View 
            style={
                    {
                        height:150,
                        width:150,
                        marginTop:10,
                        marginLeft:10,
                        backgroundColor:`rgb(${red},${green},${blue})`
                    }
                }/>
            <Text>rgb({red},{green},{blue})</Text>
        </View>

    )
}

const styles = StyleSheet.create({

});

export default SquareScreenOld2Reducer;