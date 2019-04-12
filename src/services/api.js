import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backendmoreira.herokuapp.com',
});

export default api;