import Address from "../address/Address";
import Posts from "../posts/Posts";
// import {useEffect, useState} from "react";
// import {getCommentOfUser, getPostOfUser} from "../services/user.service";
import Comments from "../comments/Comments";
import {useEffect, useState} from "react";
import {getCommentOfUser, getPostOfUser} from "../services/user.axios";


export default function User({item, item: {address}}) {

    // let [posts,setPosts] = useState([])
    //
    // useEffect(() => {
    //     getPostOfUser(item.id).then((data) => setPosts([...data]))
    // }, [item.id])
    //
    //
    // let [comments, setComments] = useState([])
    //
    // useEffect(() => {
    //     getCommentOfUser(item.id).then((data) => setPosts([...data]))
    // }, [item.id])
    let [posts, setPosts] = useState([])
    useEffect( () => {
        getPostOfUser(item.id).then(({data}) => setPosts([...data]))
    }, [item.id])


    let [comments, setComments] = useState([])
useEffect(() => {
    getCommentOfUser(item.id).then(({data}) => setComments([...data]))
},[item.id])


    return (
        <div>
            <h2>{item.id}) <b><i>user:</i></b> {item.name}</h2>
            <ul>
                <li><b><i>username:</i></b> {item.username}</li>
                <li><b><i>email:</i></b> {item.email}</li>
                <li><b><i>phone:</i></b> {item.phone}</li>
                <li><b><i>website:</i></b> {item.website}</li>
                <li><b><i>COMPANY name:</i></b> {item.company.name}</li>
                <li><b><i>COMPANY catch phrase:</i></b> {item.company.catchPhrase}</li>
                <li><b><i>COMPANY bs:</i></b> {item.company.bs}</li>
            </ul>
            <Address address={address}/>

            <b><i>Posts of user:</i></b>
            <Posts posts={posts}/>

            <b><i>Comments of user:</i></b>
            <Comments comments={comments}/>


        </div>
    )
}