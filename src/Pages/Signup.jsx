import  { useState } from "react";
import { useAuth } from "../Components/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isSignedUp = signup(userName, password);
    if (isSignedUp) {
      navigate("/TodoApp"); // Redirect to home page after signup
    } else {
      alert("User already exists");
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <label>Full Name</label>
        <input placeholder="Enter your full name" type="text" /> */}
        <label>User Name</label>
        <input placeholder="Enter your username" type="text"     value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required/>
        <label>Password</label>
        <input placeholder="Enter password" type="password" value={password}
        onChange={(e) => setPassword(e.target.value)}
        required/>
        {/* <label>Confirm Password</label>
        <input placeholder="confirm username" type="password" /> */}
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
