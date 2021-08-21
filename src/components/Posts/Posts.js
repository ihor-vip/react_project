import {useEffect, useState} from "react";
import Post from "../Post/Post";
import {Route} from "react-router-dom";
import {getPosts} from "../../services/GetPostsApi";
import {PostAPI} from "./PostDetailsApi";
import './Posts.css'

export default function Posts(props){
    let {match:{url},history} = props
    let [posts,setPosts] = useState([])

    useEffect(()=>{
      getPosts().then(value => setPosts([...value]))
    },[])

    return(
        <div className={'main-container'}>
            <div className={'post-list'}>

                    {
                        posts.map(value=> <Post history={history} item={value} key={value.id} />)
                    }

            </div>

            <Route path={`${url}/:id`} render={(props) => <PostAPI{...props}/>}/>
        </div>
    )
}