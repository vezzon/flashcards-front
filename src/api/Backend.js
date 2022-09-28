import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:4000/api';
axios.defaults.withCredentials = true;

// axios.defaults.headers.common['Authorization'] = ''

axios.interceptors.response.use(
  res => res,
  async err => {
    const prevReq = err?.config;

    if (err?.response?.status === 403 && !prevReq?.sent) {
      prevReq.sent = true;
      console.log('1', prevReq);

      const response = await axios.get('refresh');
      const token = response.data.token;

      prevReq.headers.Authorization = `Bearer ${token}`;
      console.log('2', prevReq);
      return axios(prevReq);
    }
  }
);

// export default axios.create({
//   withCredentials: true,
//   baseURL: 'http://127.0.0.1:4000/api'
// });
