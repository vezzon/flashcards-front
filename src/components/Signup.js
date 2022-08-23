import { useState } from 'react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = event => {
    event.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    console.log(userData);

    setEmail('');
  };

  const emailHandler = event => {
    setEmail(event.target.value);
  };

  const passwordHandler = event => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <h1>Signup!</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            required
            onChange={emailHandler}
          />
        </div>
        <div>
          <label name="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={passwordHandler}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
      <div>
        <a href="/login">Already have an account?</a>
      </div>
    </div>
  );
}
