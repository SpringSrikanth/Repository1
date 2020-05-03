import  React ,{useState}from "react";
import { View,Text,StyleSheet } from "react-native";
import ColorCounter from "./components/ColorCounter";

const COLOR_INCREMENT=10;

const SquareScreen =()=>{
    const [red,setRed]= useState(0);
    const [green,setGreen]= useState(0);
    const [blue,setBlue]= useState(0);
    function setColor(color ,change){
        switch(color){
            case 'red':
                return red+change>255 || red+change<0?null:setRed(red+change);
            case 'green':
                return green+change>255 || green+change<0?null:setGreen(green+change);
            case 'blue':
                return blue+change>255 || blue+change<0?null:setBlue(blue+change);
            default:
                return;
            }
    }

    return (
        <View>
            <ColorCounter 
            color="Red" 
            onIncrease={()=>setColor('red',COLOR_INCREMENT)}
            onDecrease={()=>setColor('red',-1*COLOR_INCREMENT)}
            />
            <ColorCounter 
            color="Green"
            onIncrease={()=>setColor('green',COLOR_INCREMENT)}
            onDecrease={()=>setColor('green',-1*COLOR_INCREMENT)}
            />
            <ColorCounter 
            color="Blue"
            onIncrease={()=>setColor('blue',COLOR_INCREMENT)}
            onDecrease={()=>setColor('blue',-1*COLOR_INCREMENT)}
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

export default SquareScreen;