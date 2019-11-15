import axios from 'axios';

const jsonplaceholderApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const getUserById = id => jsonplaceholderApi.get(`/users/${id}`);

export const getUsers = () => jsonplaceholderApi.get('/users');
