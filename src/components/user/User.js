import './User1.css'
import Address from "../address/Address";
import Posts from "../posts/Posts";
import {useEffect, useState} from "react";
import {getPostOfUser} from "../../services/service-axios";



export default function User({item, item: {address}}) {

    let[posts, setPosts] = useState([])

    useEffect(() => {
        getPostOfUser().then(value => setPosts([...value]))

    },[])



    return (
        <div className={'box'}>

            <h2>{item.id}) <b><i>user:</i></b> {item.name}</h2>

            <ul>
                <li><b><i>- username:</i></b> {item.username}</li>
                <li><b><i>- email:</i></b> {item.email}</li>
                <li><b><i>- phone:</i></b> {item.phone}</li>
                <li><b><i>- website:</i></b> {item.website}</li>
                <li><b><i>-address:</i></b><Address address={address}/></li>
                <li><b><i>- COMPANY name:</i></b> {item.company.name}</li>
                <li><b><i>- COMPANY catch phrase:</i></b> {item.company.catchPhrase}</li>
                <li><b><i>- COMPANY bs:</i></b> {item.company.bs}</li>
            </ul>

            <b><i>Posts of user</i></b>
            <Posts posts={posts}/>

        </div>
    )
}