import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import SignForm from '../SignForm';
import axios from '../../api/axios';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [navigate, setNavigate] = useState(false);
  const { login } = useAuth();

  const submitHandler = async event => {
    event.preventDefault();

    try {
      const res = await axios.post('/login', { email, password });
      console.log(res);

      const { id, token } = res.data;

      login(id, token);
      setNavigate(true);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const emailHandler = event => {
    setEmail(event.target.value);
  };

  const passwordHandler = event => {
    setPassword(event.target.value);
  };

  if (navigate) {
    return <Navigate to={'/dashboard'} />;
  }

  return (
    <SignForm
      header={'Login'}
      submitHandler={submitHandler}
      email={email}
      emailHandler={emailHandler}
      password={password}
      passwordHandler={passwordHandler}
      submitButton={'Login'}
      href={'/signup'}
      linkText={"Don't have account yet?"}
    />
  );
};

export default Login;
