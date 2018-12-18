import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: 'token a4b26b415d1b99019a5ac9dad87fc21c117c3456',
  },
});

export default api;
