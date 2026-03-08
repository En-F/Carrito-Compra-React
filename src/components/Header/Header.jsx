import "./Header.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import DarkMode from "../DarkMode";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className="header-principal">
      <div className="header-container">
        <div className="header-left">
          <DarkMode />
          <h1 className="header-title">
            Mi Tienda <span>de compras</span>
          </h1>
        </div>

        <nav className="header-nav">
          <Link to="/" className="nav-link">
            Inicio
          </Link>
          <Link to="/otherpage">
            <Button clase="btn-nav" texto="Otra Página" />
          </Link>
        </nav>

        <div className="header-right">
          <Link to="/carrito" className="cart-icon-wrapper">
            <FaShoppingCart className="cart-icon" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
