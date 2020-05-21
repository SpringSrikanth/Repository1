import React , {useContext} from 'react';
import {View,Text,ScrollView,StyleSheet} from 'react-native';
import { Context as BlogContext} from "../Context/BlogContext";
import { convertedDate } from "../Service/Util";

const ShowScreen = ({route}) => {
    const {id}=route.params;
    const {state} = useContext(BlogContext);
    const blogPost =state.find(post => post.id === id);
    // console.log(blogPost);
    
    return (
        <View style={styles.showBlogStyle}>
            <View style={styles.innerView}>
                <Text style={styles.title}>{blogPost.title}</Text>
                <Text style={{fontSize:10}}>Upadted On {convertedDate(blogPost.updatedDate)}</Text>
                <ScrollView style={{flex:1}}>
                {blogPost.content.length==0
                ?<Text style={styles.content}>No Blog Content Available</Text>
                :<Text style={styles.content}>{blogPost.content}</Text>}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    showBlogStyle:{
        marginHorizontal:12,
        marginVertical:20,
        borderWidth:2,
        borderRadius:8,
        borderColor:'lightgrey',
    },
    innerView:{
        marginHorizontal:15,
        marginVertical:10,
        height:150,
    },
    title:{
        fontSize:24,
        fontWeight: 'bold',
    },
    content:{
        fontSize:12
    }
});

export default ShowScreen;