import {useEffect, useState} from "react";
import {getUser} from "../../services/GetUsersApi";

export function UsersAPI(props){
    console.log(props)
    let{match:{params:{id}}} = props;
    let[user,setUser] = useState({})
    useEffect(()=>{
        getUser(id).then(value => setUser({...value}))
    },[id])
    return(
        <div className={'container'}>
            <h2>INFO ABOUT USER</h2>
            <h2>{user.id}) <b><i>user:</i></b> {user.name}</h2>

            <ul>
                <li><b><i> username: </i></b> {user.username}</li>
                <li><b><i> email: </i></b> {user.email}</li>
                <li><b><i> phone: </i></b> {user.phone}</li>
                <li><b><i> website: </i></b> {user.website}</li>
            </ul>
        </div>
    )
}