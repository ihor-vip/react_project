import {useEffect, useState} from "react";
import Comments from "../comments/Comments";
import {getCommentOfUser} from "../../services/service-axios";
import './Post.css'
export default function Post({item}) {

    let [comments, setComments] = useState([]);
    useEffect( () => {
        getCommentOfUser(item.id).then(({data}) => setComments([...data]))
    }, [item.id])

let [toggle, setToggle] = useState('hide')


    return (
        <div className={'box'}>

               <div>
                   <ul> <h3>current post</h3>
                       <li><b><i>- {item.title}</i></b></li>
                   </ul>
               </div>

               <div className={toggle}>
                   <h3>comments to current post</h3>
                   <Comments comments={comments}/>
               </div>


               <button onClick={() =>{
                   if (toggle === 'hide') {
                       setToggle('show') ;
                   }
                  else if(toggle === 'show') {
                       setToggle('hide');
                   }


               }}>Comments to current Post
               </button>



        </div>
    )
}