import { useState } from 'react';
import SignForm from '../SignForm';
import axios from '../../api/Backend';
import { Navigate } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [navigate, setNavigate] = useState(false);

  const submitHandler = async event => {
    event.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    try {
      const res = await axios.post('/signup', userData);
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
  };

  const passwordHandler = event => {
    setPassword(event.target.value);
  };

  if (navigate) {
    return <Navigate to={'/login'} />;
  }

  return (
    <SignForm
      header={'Signup!'}
      submitHandler={submitHandler}
      email={email}
      emailHandler={emailHandler}
      password={password}
      passwordHandler={passwordHandler}
      submitButton={'Signup'}
      href={'/login'}
      linkText={'Already have an account?'}
    />
  );
}
