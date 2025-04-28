import axios from 'axios';

const Fetch = axios.create({
    headers: { 'Content-Type': 'application/json' },
});

Fetch.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
}, Promise.reject);

Fetch.interceptors.response.use(
    (res) => res,
    (error) => {
        return Promise.reject(error);
    }
);

export default Fetch;
