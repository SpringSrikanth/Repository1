import React,{useContext} from 'react';
import {Text,View,FlatList,Button,StyleSheet} from 'react-native';
//use context object
import BlogContext from '../Context/BlogContext'
const HomeScreen = () =>{
    const {data,addBlogPost}=useContext(BlogContext);
    return (
        <View>
            <Text>HomeScreen</Text>
            <FlatList
            data={data}
            keyExtractor={(blogPost)=> blogPost.title}
            renderItem={({item})=>{
                return (<Text>{item.title}</Text>)
            }}
            />
            <Button 
            title="Add Blog Post"
            onPress={addBlogPost}
            />
        </View>
    )
}

const styles = StyleSheet.create({});

export default HomeScreen;