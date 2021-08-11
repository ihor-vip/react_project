import {useEffect, useState} from "react";
import User from "../User/User";
import {getUsers} from "../../services/user.axios";
// import {getUsers} from "../../services/user.service";

export default function Users() {

let [users,setUsers] = useState([])

   useEffect(() => {
      // getUsers().then(value => setUsers([...value]));
       getUsers().then(({data}) => setUsers([...data]))

   },[]);
    return (
        <div>
            {
                users.map(value => <User item={value} key={value.id}/>)
            }

        </div>
    );
}

