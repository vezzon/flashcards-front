import { Link } from 'react-router-dom';

export default function SignForm(props) {
  return (
    <div>
      <h1>{props.header}</h1>
      <form onSubmit={props.submitHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={props.email}
            required
            onChange={props.emailHandler}
          />
        </div>
        <div>
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
      <div>
        <Link to={props.href}>{props.linkText}</Link>
      </div>
    </div>
  );
}
