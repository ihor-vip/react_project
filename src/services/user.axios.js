import axios from 'axios';

let config = {
    baseURL: 'https://jsonplaceholder.typicode.com/users',
};
let axiosInstance = axios.create(config);

const getUsers = () => {
    return axiosInstance.get();
};

const getUser = (id) => {
    return axiosInstance.get(`/${id}`);
};

export {getUsers, getUser}

