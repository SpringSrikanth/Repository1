import createDataContext from "./createDataContext";

const blogReducer = (state,action)=>{
    //console.log('blogReducer');
    switch(action.type){
        case 'addBlogPost':
            return [...state,{title:`Blog Post #${state.length+1}` , id:Math.floor(Math.random()*199999)}]
        case 'deleteBlogPost':
            return state.filter((item)=>{
                return item.id!==action.payload;
            });
        default :
            return state;
    }
}
const addBlogPost = dispatch =>{
    return ()=>{
        dispatch({type:'addBlogPost'});
    }
}

const deleteBlogPost = dispatch =>{
    return (id)=>{
        dispatch({type:'deleteBlogPost',payload:id});
    }
}

export  const {Context,Provider} = createDataContext(
    blogReducer,
    {addBlogPost,deleteBlogPost}
    ,[]);