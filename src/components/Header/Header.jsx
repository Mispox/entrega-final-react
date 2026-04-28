import logo from "../../assets/react.svg";
import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} />
        <span>Reactiva</span>
      </div>
      <Nav />
    </header>
  );
};