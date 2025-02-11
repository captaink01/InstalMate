import  { useState } from "react";
import { useAuth } from "../Components/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const isLoggedIn = login(userName, password);
    if (isLoggedIn) {
      navigate("/TodoApp"); // Redirect to home page after login
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>User name</label>
        <input placeholder="Enter your username" type="text"  value={userName} onChange={(e) => setUserName(e.target.value)}
        required/> <br />
        <label>Password</label>
        <input placeholder="Enter your password" type="password"  value={password}
        onChange={(e) => setPassword(e.target.value)}
        required />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
