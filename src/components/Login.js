export default function Login() {
  return (
    <div>
      <h1>Login!</h1>
      <form action="POST">
        <div>
          <label for="email">Email</label>
          <input type="text" name="email" required></input>
        </div>
        <div>
          <label name="password">Password</label>
          <input type="password" name="password" required></input>
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        <a href="/signup">Don't have an account yet?</a>
      </div>
    </div>
  );
}
