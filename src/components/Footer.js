import "./Footer.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="Footer">
      <ul className="Navigation">
        <NavLink to="/">
          <li>home</li>
        </NavLink>
        <NavLink to="/lists">
          <li>lists</li>
        </NavLink>
        <NavLink to="/lists/:user">
          <li>my list</li>
        </NavLink>
      </ul>
    </footer>
  );
}
