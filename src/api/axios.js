import axios from 'axios';

const baseURL = 'http://127.0.0.1:4000/api';

export default axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

export const axiosPrivate = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});
