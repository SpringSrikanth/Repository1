import React ,{useContext} from 'react';
import {StyleSheet} from 'react-native';
import { Context as BlogContext } from "../Context/BlogContext";
import BlogPostCommonForm from "../Components/BlogPostCommonForm";
const CreateScreen = ({navigation}) =>{
    const {addBlogPost}=useContext(BlogContext)
    return <BlogPostCommonForm 
        labelValues={
            {
                labelTitle:'Enter Title',
                labelContent:'Enter Content',
                labelButton:'Save Blog Post'
            }
        }
        // initialValues={{title:'',content:''}}
        onSubmit={(title,content) =>{
        addBlogPost(title, content,()=>{
            navigation.navigate('Home');
        })
    }
    }/>
}

const styles = StyleSheet.create({
});

export default CreateScreen;