import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/Signup">Signup</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
