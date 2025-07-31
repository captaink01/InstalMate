import { useState } from "react";
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
      navigate("/TodoApp");
    } else {
      alert("User already exists");
    }
  };

  return (
    <div>
      <form>
        <label>Full Name</label>
        <input placeholder="Enter your full name" type="text" />
        <label>User Name</label>
        <input placeholder="Enter your username" type="text" />
        <label>Password</label>
        <input placeholder="Enter password" type="password" />
        <label>Confirm Password</label>
        <input placeholder="confirm username" type="password" />
        <button>Signup</button>
      </form>
    </div>
  );
}
