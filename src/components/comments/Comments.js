import Comment from "../comment/Comment";
import {useEffect, useState} from "react";
import {getCommentOfUser} from "../../services/service-axios";
import './Comments.css'

export default function Comments() {

    let [comments, setComments] = useState([])
    useEffect(()=>{
        getCommentOfUser().then(({data}) => setComments([...data]))
    },[])

    return (
        <div className={'wrap-comment'}>
            <h2><b><i>ALL COMMENTS</i></b></h2>

            {
                comments.map((value,index) => <Comment item={value} key={index}/>)
            }
        </div>
    )
}