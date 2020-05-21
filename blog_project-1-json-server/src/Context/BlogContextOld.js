import React,{useReducer} from 'react';

const BlogContext = React.createContext();

const blogReducer = (state,action)=>{
    //console.log('blogReducer');
    switch(action.type){
        case 'addBlogPost':
            return [...state,{title:`Blog Post #${state.length+1}`}]
        default :
            return state;
    }
}

export const BlogProvider = ({children}) =>{
    const [state,dispatch]=useReducer(blogReducer,[]);
    const addBlogPost = () =>{
        dispatch({type:'addBlogPost'});
    }

    return (
        <BlogContext.Provider
        value={{data:state, addBlogPost}}
        >
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext;