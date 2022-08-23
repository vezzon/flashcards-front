export default function SignForm(props) {
  return (
    <div>
      <h1>Signup!</h1>
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
          <label name="password">Password</label>
          <input
            type="password"
            name="password"
            value={props.password}
            required
            onChange={props.passwordHandler}
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
