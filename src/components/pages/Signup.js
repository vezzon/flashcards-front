import { useState } from 'react';
import SignForm from '../SignForm';
import axios from '../../api/axios';
import { Navigate } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [navigate, setNavigate] = useState(false);
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState(false);

  const submitHandler = async event => {
    event.preventDefault();

    if (password.length < 15) {
      setErr(true);
      setErrMsg('Password has has to be at least 15 characters');
      return;
    }

    const userData = {
      email: email,
      password: password,
    };

    try {
      const res = await axios.post('/users/signup', userData);
      console.log(res);

      if (res.status === 201) {
        setNavigate(true);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const emailHandler = event => {
    setEmail(event.target.value);
    setErr(false);
  };

  const passwordHandler = event => {
    setPassword(event.target.value);
    setErr(false);
  };

  if (navigate) {
    return <Navigate to={'/login'} />;
  }

  return (
    <SignForm
      err={err}
      errMsg={errMsg}
      header={'Signup'}
      submitHandler={submitHandler}
      email={email}
      emailHandler={emailHandler}
      password={password}
      passwordHandler={passwordHandler}
      submitButton={'Signup'}
      href={'/login'}
      text={'Already a member?'}
      link={'Login!'}
    />
  );
}
