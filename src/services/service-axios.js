import axios from 'axios';

let config = {
    baseURL: 'https://jsonplaceholder.typicode.com/'
}

let axiosInstance = axios.create(config);

const getUsers = () => {
    return axiosInstance.get('users')
}

const getPostOfUser = () => {
    return axiosInstance.get(`posts`)
}

const getCommentOfUser = () => {
    return axiosInstance.get(`comments`)
}


export {getUsers, getPostOfUser, getCommentOfUser}