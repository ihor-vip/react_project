import {useEffect, useState} from "react";
import {getUsers} from "../services/service-axios";
import User from "./user/User";
import './Users.css'

export default function Users() {

let[users, setUsers] = useState([])

useEffect(() => {
    getUsers().then(({data}) => setUsers([...data]))
} ,[])

    return (

        <div className={'wrap'}>
            {
                users.map(value => <User item={value} key={value.id}/>)
            }


        </div>
    );
}