import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getPostOfUser} from "../../services/service-axios";
import './Posts.css'

export default function Posts() {

let [posts, setPosts] = useState([])

useEffect(()=>{
    getPostOfUser().then(({data}) => setPosts([...data]))
},[])

    return (

        <div className={'wrap-box'}>

            <h2><b><i>ALL POSTS</i></b></h2>

            {
                posts.map((value,index) => <Post item={value} key={index}/>)

            }

        </div>
    )
}