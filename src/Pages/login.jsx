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
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
        

     <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
     <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
      Login
    </h1>

  {/* Username Field */}
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      Username
    </label>
    <input
      type="text"
      placeholder="Enter your username"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      required
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Password Field */}
  <div className="mb-6">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      Password
    </label>
    <input
      type="password"
      placeholder="Enter your password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    Login
  </button>
</form>
       

    </div>
  );
}

export default Login;
