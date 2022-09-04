import { useState } from 'react';
import SignForm from './SignForm';
import axios from 'axios';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async event => {
    event.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    console.log(userData);

    const url = 'http://127.0.0.1:4000/signup';

    try {
      const res = await axios.post(url, { ...userData });
      console.log(res);
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
