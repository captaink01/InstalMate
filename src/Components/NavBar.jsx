import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-sky- bg-opacity-50 p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-end">
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/Home"
              className={({ isActive }) =>
                `text-black hover:text-gray-700 ${isActive ? "font-bold" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Login"
              className={({ isActive }) =>
                `text-black hover:text-gray-700 ${isActive ? "font-bold" : ""}`
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Signup"
              className={({ isActive }) =>
                `text-black hover:text-gray-700 ${isActive ? "font-bold" : ""}`
              }
            >
              Signup
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
