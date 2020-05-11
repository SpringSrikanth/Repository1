import React ,{useState,useEffect}from 'react';
import {View,Text,StyleSheet} from 'react-native';
import SearchBar from "../Screens/Components/SearchBar";
import ResultList from "./Components/ResultList";
import useResults from "../Screens/hooks/useResults";

const HomeScreen = () =>{
    const [term,setTerm]=useState('');
    const [getSearchedResults,errorMessage,results,baseImageUri]=useResults();
    const filterResults = (end,start) =>{
        return results.filter(result=>{
            return (result.servings<=end && result.servings >start)
        })
    
    }
    
    //getSearchedResults()//bad pratice don't do
    // intial loading am using useEffect Hook for functional component
    // useEffect(()=>{
    //     getSearchedResults();
    // },[])

    return (
        <View>
            <SearchBar 
             term={term}
             onTermChange={newTerm=>setTerm(newTerm)}
             onTermSubmit={()=>{getSearchedResults(term)}}
             />
             {errorMessage.length!=0?<Text>{errorMessage}</Text>:null}
             <ResultList title="Top Servings" results={filterResults(40,8)} imageUrl={baseImageUri}/>
             <ResultList title="Medium Servings" results={filterResults(8,4)} imageUrl={baseImageUri} />
             <ResultList title="Less Servings" results={filterResults(4,0)} imageUrl={baseImageUri}/>
        </View>
    )
}

const styles = StyleSheet.create({
    
});
export default HomeScreen;