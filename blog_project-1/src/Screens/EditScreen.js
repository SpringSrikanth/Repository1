import React ,{useContext} from 'react';
import {StyleSheet} from 'react-native';
import { Context as BlogContext } from "../Context/BlogContext";
import BlogPostCommonForm from "../Components/BlogPostCommonForm";

const EditScreen = ({navigation,route})=>{
    const {id} =route.params;
    const {state,editBlogPost} = useContext(BlogContext);
    const blogPost =state.find(post => post.id === id);  
    
    return <BlogPostCommonForm 
    labelValues={
        {
            labelTitle:'Edit Title:',
            labelContent:'Edit Content:',
            labelButton:'Update Blog Post'
        }
    }
    initialValues={{title:blogPost.title,content:blogPost.content}}
    onSubmit={(title, content)=>{
        editBlogPost(id,title, content,()=>{
            // navigation.navigate('Home');
            navigation.pop();
        })
    }}
    />
}
const styles = StyleSheet.create({
});

export default EditScreen;