import "./Hero.css";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="hero">
      <h2>La librería más escalofriante</h2>
      <p>Descubrí los mejores libros de terror</p>
      <Link to="/productos" className="hero-btn">Ver libros</Link>
    </div>
  );
};