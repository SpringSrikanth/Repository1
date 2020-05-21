import React ,{useState} from 'react';
import {View,Text,Button,TextInput,StyleSheet} from 'react-native';

const BlogPostCommonForm = ({initialValues,labelValues,onSubmit})=>{
    const [title,setTitle] = useState(initialValues.title);
    const [content,setContent] = useState(initialValues.content);
    return (
            <View style ={{margin:10}}>
                <Text style={styles.textFont}>{labelValues.labelTitle}</Text>
                <TextInput 
                    style={styles.textInput}
                    value={title}
                    onChangeText={(text)=>{setTitle(text)}}
                    placeholder="Title"
                    autoCorrect={false}
                    autoCapitalize="none"
                    autoFocus={true}
                    placeholderTextColor="grey"
                />
                <Text style={styles.textFont}>{labelValues.labelContent}</Text>
                <TextInput 
                    style={styles.textInput}
                    value={content}
                    onChangeText={(text)=>{setContent(text)}}
                    placeholder="Content"
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholderTextColor="grey"
                />
                <Button 
                    title={labelValues.labelButton}
                    onPress={()=>{
                            onSubmit(title,content);
                        }
                    }
                />
            </View>
    );

}
const styles = StyleSheet.create({
    textInput: {
        borderColor:'grey',
        borderWidth:1,
        borderRadius:4,
        marginHorizontal:8,
        paddingVertical:6,
        marginVertical:8
    },
    textFont:{
        fontSize:20,
        fontWeight:"normal",
        marginHorizontal:8,
        marginVertical:5
    },
    

});

BlogPostCommonForm.defaultProps={
    initialValues:{
        title: "",
        content:""
    }
}
export default BlogPostCommonForm;