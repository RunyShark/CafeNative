import axios from 'axios';

const baseURL = 'http://192.168.100.187:8080/api';

export const api = axios.create({
  baseURL,
});
