import React ,{useState,useEffect}from 'react';
import { View,Text,StyleSheet,Image,ScrollView} from 'react-native';
import Spoonacular from "./api/Spoonacular.js";
const ResultShowScreen = ({route,navigation}) =>{
    const regex = /(<([^>]+)>)/ig;
    const [result,setResult] = useState(null);
    const [errorMessage,setErrorMessage] = useState('');
    const {id} =route.params;
    const getRecipeResultById = async () =>{
        try {
            const response = await Spoonacular.get(`/recipes/${id}/information`,
            {
                params:{
                    apiKey:'f4e9e08c9fb3448e958806d7dd7919b0'
                }
            });
            //console.log(response.data)
            setResult(response.data);
        }
        catch(err) {
            console.log(err,'reeeeeeeeeeeee')
            setErrorMessage('Something went wrong!');
        }
    }
   // console.log(result);
    //for initial loading
    useEffect(()=>{
        getRecipeResultById();
    },[])

    // if(!result){
    //     return null;
    // }
    if(!result){
        return <View>
            <Text>Loading...</Text>
        </View>
    }

    return (
        <View style={{marginLeft:10,flex:1}}>
            {errorMessage.length==0?<Text>{errorMessage}</Text>:null}
            <Text style={styles.title}>{result.title}</Text>
            <ScrollView>
            <Image style={styles.image} source={{uri: result.image}} />
            <Text style={{fontWeight:"bold"}}>Ready in minutes-{result.readyInMinutes}</Text>
            <Text style={{fontWeight:"bold"}}>Number of servings-{result.servings}</Text>
            <Text style={{textAlign:"justify"}}>{result.summary.replace(regex,"")}</Text>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    image:{
        height:180,
        width:280,
        borderRadius:4
    },
    title:{
        marginTop:10,
        marginBottom:10,
        fontSize:20,
        fontWeight:"bold"
    }
})
export default ResultShowScreen;