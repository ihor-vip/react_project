import {useEffect, useState} from "react";
import {getUsers} from "../../services/service-axios";
import User from "../user/User";
import './Users.css';
import {getPostOfUser} from "../../services/service-axios";
import Posts from "../posts/Posts";

export default function Users() {

    let [users, setUsers] = useState([]);
    let [posts, setPosts] = useState(null);

    const chooseUser = (id) => getPostOfUser(id).then(({data}) => setPosts(data));

        useEffect(() => {
            getUsers().then(({data}) => setUsers([...data]))
        }, [])

    return (
        <div className={'wrap'}>
            <div className={'users-box'}>{
                        users.map(value => <User key={value.id}
                                            item={value}
                                            chooseUser={chooseUser}
                                           />
                                 )
                            }
            </div>

                {posts && <div className={'chosen-one'}> <h3><b><i>Posts of user</i></b></h3>
                                    <Posts posts={posts}/>
                          </div>}
        </div>
    );
}