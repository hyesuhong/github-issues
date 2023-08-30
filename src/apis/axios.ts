import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: {'X-GitHub-Api-Version': '2022-11-28'},
});

instance.interceptors.request.use(
    config => {
        const token = GITHUB_TOKEN;

        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    error => {
        return error;
    }
);
