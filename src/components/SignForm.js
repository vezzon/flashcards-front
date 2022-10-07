import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './SignForm.css';

const SignForm = ({
  header,
  submitHandler,
  email,
  emailHandler,
  password,
  passwordHandler,
  submitButton,
  href,
  linkText,
  err,
  errMsg,
}) => {
  const emailRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <div className="signform__container">
      <form className="signform__form" onSubmit={submitHandler}>
        <h1 className="signform__header">{header}</h1>
        <div className="signform__input">
          <label htmlFor="email">Email</label>
          <input
            ref={emailRef}
            id="email"
            type="email"
            name="email"
            value={email}
            required
            onChange={emailHandler}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            required
            onChange={passwordHandler}
          />
        </div>
        {err && <p className="sumbit__error">{errMsg}</p>}
        <button className="signform__submit" type="submit">
          {submitButton}
        </button>
        <button className="signform__link">
          <Link to={href}>{linkText}</Link>
        </button>
      </form>
    </div>
  );
};

export default SignForm;
