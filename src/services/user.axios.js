import axios from 'axios';

let config = {
    baseURL: 'https://jsonplaceholder.typicode.com/',
};
let axiosInstance = axios.create(config);

const getUsers = () => {
    return axiosInstance.get('users');
};

const getUser = (id) => {
    return axiosInstance.get(`users/${id}`);
};

const getPostOfUser = (userId) => {
  return  axiosInstance.get( `users/${userId}/posts`)
}
// https://jsonplaceholder.typicode.com/posts/1/comments
const getCommentOfUser = () => {
    return axiosInstance.get( `comments`)
}

export {getUsers, getUser, getPostOfUser, getCommentOfUser}

