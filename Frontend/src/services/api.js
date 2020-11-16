import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.4:3004' || 'http://localhost:3004',
});

export default api;
