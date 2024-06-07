import axios from 'axios';

const api = axios.create({
    baseURL: '/together',
});

export default api;
