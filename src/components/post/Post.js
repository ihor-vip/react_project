import {useEffect, useState} from "react";
import {getCommentOfUser, getPostOfUser} from "../services/user.axios";
import Posts from "../posts/Posts";
import Comments from "../comments/Comments";

export default function Post({item}) {

    let [comments, setComments] = useState([]);
    useEffect( () => {

        getCommentOfUser(item.id).then(({data}) => setComments([...data]))
    }, [item.id])

    return (
        <div>
            <ul>
                <li><b><i>{item.title}</i></b></li>
            </ul>
            <b><i>comments</i></b>
           <Comments comments={comments}/>
        </div>
    )
}