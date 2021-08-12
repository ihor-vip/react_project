import './App.css';
import Users from "./component/users/Users";
import Comments from "./component/comments/Comments";
import {useEffect, useState} from "react";
import {getCommentOfUser} from "./services/user.axios";


export default function App() {
    let [comments, setComments] = useState([])

    useEffect( () => {
        getCommentOfUser().then(({data}) => setComments( [...data]))
    },[])

  return (
        <div className={'box'}>
            <div>
                <Users/>
            </div>

            <div className={'main'}>
                <Comments comments={comments}/>
            </div>
        </div>
  );
}


