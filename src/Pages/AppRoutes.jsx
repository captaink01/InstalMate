import { Routes, Route } from "react-router-dom";
import Login from "../Pages/login";
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";
import TodoApp from "../Pages/TodoApp";

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/TodoApp" element={<TodoApp />} />
      </Routes>
    </div>
  );
}
