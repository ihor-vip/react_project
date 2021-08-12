import axios from 'axios';

let config = {
    baseURL: 'https://jsonplaceholder.typicode.com/'
}

 let axiosInstance = axios.create(config);

const getUsers = () => {
    return axiosInstance.get('users')
}

const getUser = (id) => {
    return axiosInstance.get(`users/${id}`)
}

const getPostOfUser = (userId) => {
return axiosInstance.get(`users/${userId}/posts`)
}

const getCommentOfUser = (userId) => {
    return axiosInstance.get(`posts/${userId}/comments`)
}

export{getUsers, getUser, getPostOfUser, getCommentOfUser}