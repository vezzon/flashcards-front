import { useState, useContext } from 'react';
import LoginContext from '../../context/LoginContext';
import SignForm from '../SignForm';
import axios from '../../api/Backend';
import { Navigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [navigate, setNavigate] = useState(false);
  const loginContext = useContext(LoginContext);

  const submitHandler = async event => {
    event.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    try {
      const res = await axios.post('/login', userData);
      console.log(res);

      const { id, token } = res.data;

      loginContext.login(id, token);
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
      header={'Login!'}
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
}
