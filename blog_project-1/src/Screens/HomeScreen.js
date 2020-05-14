import React,{useContext} from 'react';
import {Text,View,FlatList,Button,TouchableOpacity,StyleSheet} from 'react-native';
//use context object
import {Context as BlogContext} from '../Context/BlogContext';
import { MaterialIcons,Feather } from '@expo/vector-icons';
const HomeScreen = ({navigation}) =>{
    const {state,addBlogPost,deleteBlogPost}=useContext(BlogContext);
    return (
        <View style={{flex:1}}>
            {/* <Text>HomeScreen</Text> */}
            <Button 
            title="Add Blog Post"
            onPress={addBlogPost}
            />
            <FlatList
            data={state}
            keyExtractor={(blogPost)=> `${blogPost.id}`}
            renderItem={({item})=>{
                return (
                    <TouchableOpacity onPress={()=>{navigation.navigate('Show',{id:item.id})}}>
                        <View style={styles.listStyle}>
                            <Text  style={styles.title}>{item.title} - {item.id}</Text>
                            <TouchableOpacity
                                onPress={()=>{deleteBlogPost(item.id);
                                }}
                            >
                                <MaterialIcons 
                                style={styles.icon} 
                                name="delete" 
                                color="black" />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>)}
                    }
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    listStyle:{
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingHorizontal:13,
        paddingVertical:13,
        borderWidth:1,
        borderColor:'grey',
        borderRadius:4
    },
    title:{
        fontSize:20
    },
    icon:{
        fontSize:26,
        
    }

});

export default HomeScreen;