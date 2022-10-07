import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './SignForm.css';

const SignForm = props => {
  const emailRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <div className="signform-container">
      <h1>{props.header}</h1>
      <form onSubmit={props.submitHandler}>
        <div className="signform-input">
          <label htmlFor="email">Email</label>
          <input
            ref={emailRef}
            type="email"
            name="email"
            value={props.email}
            required
            onChange={props.emailHandler}
          />
        </div>
        <div className="signform-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={props.password}
            required
            onChange={props.passwordHandler}
          />
        </div>
        <button type="submit">{props.submitButton}</button>
      </form>
      <button className="signform-link">
        <Link to={props.href}>{props.linkText}</Link>
      </button>
    </div>
  );
};

export default SignForm;
