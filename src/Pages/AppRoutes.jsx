import { Routes, Route } from "react-router-dom";
import Login from "../Pages/login";
import Signup from "../Pages/Signup";
import About from "../Pages/About";
import TodoApp from "../Pages/TodoApp";

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/TodoApp" element={<TodoApp />} />
      </Routes>
    </div>
  );
}
