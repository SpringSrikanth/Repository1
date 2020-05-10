// custom hook for all components
import {useState,useEffect} from 'react';
import Spoonacular from "../api/Spoonacular";

export default ()=>{
    const [results,setResults] = useState([]);
    const [baseImageUri,setBaseImageUri] = useState('');
    const [errorMessage,setErrorMessage] = useState('');
    const getSearchedResults = async (term) => {
        console.log('getSearchedResults----',term)
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
            //console.log(response.data.results)
            //console.log(response.data.results.length + " items")
            //console.log("total count " + results.length)
        }
        catch(err){
            setErrorMessage('something went wrong!')
        }
    }
    useEffect(()=>{
        getSearchedResults('burger');
    },[])
    return [getSearchedResults,errorMessage,results,baseImageUri];
}