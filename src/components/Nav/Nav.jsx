import "./Nav.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/carrito">Carrito</Link>
        </li>
      </ul>
    </nav>
  );
};