import "./Nav.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Nav = () => {
  const { getCartQuantity } = useCart();
  const { user, logout } = useAuth();
  const totalItems = getCartQuantity();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/carrito">
            Carrito {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>
        </li>
        {user && (
          <>
            {user.rol === 'admin' && (
              <li><Link to="/admin">Gestión</Link></li>
            )}
            <li><span className="user-email">{user.email}</span></li>
            <li><button className="logout-btn" onClick={handleLogout}>Cerrar Sesión</button></li>
          </>
        )}
      </ul>
    </nav>
  );
};