import User from "../User/User";
import {useEffect, useState} from "react";
import {Route} from "react-router-dom";
import {UsersAPI} from "../User/UserDetailsApi";
import {getUsers} from "../../services/GetUsersApi";
import './Users.css'

export function Users(props) {
    let {match: {url}, history} = props
    let [users, setUsers] = useState([])

    useEffect(() => {
       getUsers().then(value => setUsers([...value]))
    }, [])

    return (
        <div className={'main-box'}>

            <div className={'users-list'}>
                {
                    users.map(value => <User history={history} item={value} key={value.id}/>)
                }
            </div>

            <Route path={`${url}/:id`} render={(props) => <UsersAPI{...props}/>}/>
        </div>
    )
}