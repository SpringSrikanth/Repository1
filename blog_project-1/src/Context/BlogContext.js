import createDataContext from "./createDataContext";

const blogReducer = (state,action)=>{
    //console.log('blogReducer');
    switch(action.type){
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
    return (title,content,callBack)=>{
        dispatch({type:'addBlogPost',payload:{title,content}});
        if(callBack){
           callBack();
        }
    }
}

const editBlogPost = dispatch =>{
    return (id,title,content,callBack) =>{
        dispatch({type:'editBlogPost',payload:{id,title,content}});
        if(callBack){
            callBack();
        }
    }
}


const deleteBlogPost = dispatch =>{
    return (id)=>{
        dispatch({type:'deleteBlogPost',payload:id});
    }
}

const updatedDate = () =>{
    const date = new Date();
    date.setFullYear(2020);
    date.setMonth(4);// month started from 0-11
    date.setDate(12);
    return date;
}

export  const {Context,Provider} = createDataContext(
    blogReducer,
    {addBlogPost,deleteBlogPost,editBlogPost}
    ,[
        {id:11202,title:'New Post 1',content:'New Post3',createdDate:new Date(),updatedDate:updatedDate()},
        {id:11203,title:'New Post 2',content:'New Post1',createdDate:new Date(),updatedDate:new Date()},
        {id:11204,title:'New Post 3',content:'New Post2',createdDate:new Date(),updatedDate:updatedDate()}
     ]
    );