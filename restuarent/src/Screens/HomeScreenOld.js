import React ,{useState,useEffect}from 'react';
import {View,Text,StyleSheet} from 'react-native';
import SearchBar from "../Screens/Components/SearchBar";
import Spoonacular from "../Screens/api/Spoonacular";

const HomeScreen = () =>{
    const [term,setTerm]=useState('');
    const [results,setResults] = useState([]);
    const [baseImageUri,setBaseImageUri] = useState('');
    const [errorMessage,setErrorMessage] = useState('');
    const getSearchedResults = async () => {
        console.log('getSearchedResults')
        try{
            const response= await Spoonacular.get(
                             '/recipes/search',
                             {
                                 params:{
                                     query:term,
                                     number:50,
                                     instructionsRequired:true,
                                     apiKey:'f4e9e08c9fb3448e958806d7dd7919b0'
                                 }
                             }
                         );
            setBaseImageUri(response.data.baseUri);
            setResults(response.data.results);
            console.log(response.data.results)
            //console.log(response.data.results.length + " items")
            //console.log("total count " + results.length)
        }
        catch(err){
            setErrorMessage('something went wrong!')
        }
    }

   //getSearchedResults()//bad pratice don't do
   // intial loading am using useEffect Hook for functional component
    useEffect(()=>{
        getSearchedResults();
    },[])
    return (
        <View>
            <SearchBar 
             term={term}
             onTermChange={newTerm=>setTerm(newTerm)}
             onTermSubmit={()=>{getSearchedResults()}}
             />
             {errorMessage.length!=0?<Text>{errorMessage}</Text>:null}
             <Text>{term}</Text>
             <Text>we have found {results.length} results</Text>
             <Text>{baseImageUri}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
});
export default HomeScreen;