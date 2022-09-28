import useAuth from './useAuth';
import axios from '../api/axios';

const useRefreshToken = () => {
  const { setToken } = useAuth();
  const refresh = async () => {
    const response = await axios.get('/refresh', { withCredentials: true });
    const token = response.data.token;
    console.log('Token from refresh', token);
    setToken(() => token);

    return token;
  };
  return refresh;
};

export default useRefreshToken;
