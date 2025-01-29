function Login() {
  return (
    <div>
      <form>
        <label>User name</label>
        <input placeholder="Enter your username" type="text" /> <br />
        <label>Password</label>
        <input placeholder="Enter your password" type="password" />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
