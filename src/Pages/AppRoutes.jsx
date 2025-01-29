import { Routes, Route } from "react-router-dom";
import Login from "../Pages/login";
import Signup from "../Pages/Signup";
import About from "../Pages/About";

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
