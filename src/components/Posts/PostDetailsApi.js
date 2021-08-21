import {useEffect, useState} from "react";
import {getPost} from "../../services/GetPostsApi";
import './PostDetailsApi.css'

export function PostAPI(props){
    let{match:{params:{id}}} = props
    let[post,setPost] = useState({})

    useEffect(()=>{
        getPost(id).then(value => setPost({...value}))
    },[id])

    return(
        <div className={'cell'}>
            <h2>ALL INFO ABOUT POST</h2>
            <h2>{post.id}<b><i>- title: </i></b>{post.title}</h2>
            <h3> <b><i>- body: </i></b>{post.body}</h3>
        </div>
    )

}