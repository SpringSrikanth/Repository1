import React , {useContext} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { Context as BlogContext} from "../Context/BlogContext";

const ShowScreen = ({route}) => {
    const {id}=route.params;
    const {state} = useContext(BlogContext);
    const blogPost =state.find(post => post.id === id);
    // console.log(blogPost);
    
    return (
        <View >
            <Text>{blogPost.title} - {id}</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default ShowScreen;