import {useEffect, useState} from "react";
import {getCommentsOfUser} from "../../services/service-axios";
import Comments from "../comments/Comments";

export default function Post({item}) {

    let[comments,setComments] = useState([])

    useEffect(() => {
        getCommentsOfUser().then(value => setComments([...value]))
    },[])

    return (

        <div>
            <b><i>- post: </i></b>
            {
                item.title
            }
            <br/>
            <b><i>- comments to current post </i></b>
            <Comments comments={comments}/>


        </div>
    );
}