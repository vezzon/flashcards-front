import { useState, useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import SignForm from './SignForm';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { token, setToken } = useContext(LoginContext);

  const submitHandler = async event => {
    event.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    console.log(userData);

    const url = 'http://127.0.0.1:4000/login';

    try {
      const res = await axios.post(url, { ...userData });
      console.log(res.data.token);
    } catch (error) {
      console.log(error.response.data);
    }
    // setEmail('');
    // setPassword('');
  };

  const emailHandler = event => {
    setEmail(event.target.value);
  };

  const passwordHandler = event => {
    setPassword(event.target.value);
  };

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
