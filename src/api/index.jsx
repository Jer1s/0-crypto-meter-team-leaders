import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VITE_PRO_BASE_URL,
});

export default instance;
