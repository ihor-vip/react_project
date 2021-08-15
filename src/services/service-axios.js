import axios from 'axios';

let config = {
    baseURL: 'https://jsonplaceholder.typicode.com/'
}

let axiosInstance = axios.create(config);

const getUsers = () => {
    return axiosInstance.get('users')
}

const getPostOfUser = (usersId) => {
    return axiosInstance.get(`users/${usersId}/posts`)
}

const getCommentOfUser = (postId) => {
    return axiosInstance.get(`posts/${postId}/comments`)
}


export {getUsers, getPostOfUser, getCommentOfUser}



