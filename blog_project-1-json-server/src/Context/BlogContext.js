import createDataContext from "./createDataContext";
import  JsonServerApi  from "../api/JsonServerApi";
const blogReducer = (state,action)=>{
    switch(action.type){
        case 'getAllBlogPosts':
            return action.payload;
        case 'addBlogPost':
            return [...state,
                {
                    id:Math.floor(Math.random()*199999),
                    title:action.payload.title,
                    content:action.payload.content,
                    createdDate:new Date(),
                    updatedDate:new Date()
                }
            ]
        case 'deleteBlogPost':
            return state.filter((item)=>{
                return item.id!==action.payload;
            });

        case 'editBlogPost':
            return state.map((blogPost)=>{
                if(blogPost.id===action.payload.id){
                    action.payload.createdDate=blogPost.createdDate;
                    action.payload.updatedDate=new Date();
                    return action.payload;
                }
                else {return blogPost;}
            })
        default :
            return state;
    }
}
const addBlogPost = dispatch =>{
    return async (title,content,callBack)=>{
        try {
            const responce=await JsonServerApi.post('/blogposts',{title,content,createdDate:new Date(),updatedDate:new Date()});
            //dispatch({type:'addBlogPost',payload:{title,content}});
            if(callBack){
            callBack();
            }
        } catch (error) {
            console.log('error ',error)
        }
        
    }
}

const editBlogPost = dispatch =>{
    return async (id,title,content,createdDate,callBack) =>{
        const response=await JsonServerApi.put(`/blogposts/${id}`,{
            title,content,createdDate,updatedDate:new Date()
        })
        dispatch({type:'editBlogPost',payload:{id,title,content}});
        if(callBack){
            callBack();
        }
    }
}

const getAllBlogPosts = dispatch => {
    return async()=>{
       try { 
          const responce= await JsonServerApi.get('/blogposts');
          dispatch({type:'getAllBlogPosts',payload:responce.data});
       } catch (error) {
           console.log('error  ',error)
       }
    }
}

const deleteBlogPost = dispatch =>{
    return async (id)=>{
        try {
            const responce=await JsonServerApi.delete(`/blogposts/${id}`);
            dispatch({type:'deleteBlogPost',payload:id});
        } catch (error) {
            console.log('delete end point-error  ',error);
        }
    }
}

export  const {Context,Provider} = createDataContext(
    blogReducer,
    {addBlogPost,deleteBlogPost,getAllBlogPosts,editBlogPost}
    ,null
    );

    //usnig null value instead of [] array