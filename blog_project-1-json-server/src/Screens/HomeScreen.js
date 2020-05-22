import React,{useContext,useEffect} from 'react';
import {ActivityIndicator,Text,View,FlatList,TouchableOpacity,StyleSheet} from 'react-native';
//use context object
import {Context as BlogContext} from '../Context/BlogContext';
import { convertedDate } from "../Service/Util";
import { MaterialIcons,Feather } from '@expo/vector-icons';
const HomeScreen = ({navigation}) =>{
    const {state,addBlogPost,deleteBlogPost,getAllBlogPosts}=useContext(BlogContext);
    useEffect(()=>{
        getAllBlogPosts();
        const listener = navigation.addListener('focus',()=>{
            getAllBlogPosts();
        });
        return listener;
    },[])
    if(state==null){
        return (<View style={
                    {
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'center',
                        marginVertical:12
                    }
                }
                >
                {/* <Text 
                    style={{fontSize:20,fontWeight:"normal"}}
                >loading</Text> */}
                <ActivityIndicator
                size="large"
                color="grey"
                />
                </View>)
    }

    return (
        <View style={{flex:1}}>
            {/* <Text>HomeScreen</Text> */}
            {/* <Button 
            title="Add Blog Post"
            onPress={addBlogPost}
            /> */}
            {state.length === 0 ? 
                <Text style={
                        {
                        fontSize:24,
                        marginHorizontal:10,
                        marginVertical:15,
                        color:"red"
                        }
                    }>
                    No Blog Posts Found
                </Text>
            :null}
            <FlatList
            data={state}
            keyExtractor={(blogPost)=> `${blogPost.id}`}
            renderItem={({item})=>{
                return (
                    <TouchableOpacity onPress={()=>{navigation.navigate('Show',{id:item.id,title:item.title})}}>
                        <View style={styles.listStyle}>
                            <Text  style={styles.title}>{item.title} {convertedDate(item.createdDate)}</Text>
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
        fontSize:20,
        fontWeight:"bold",
    },
    icon:{
        fontSize:26,
        
    }

});

export default HomeScreen;