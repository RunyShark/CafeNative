import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'http://192.168.100.187:8080/api';

export const api = axios.create({
  baseURL,
});

api.interceptors.request.use(async config => {
  const {getItem} = AsyncStorage;
  const token = await getItem('token');
  if (token) {
    config.headers['x-token'] = token;
  }
  return config;
});
