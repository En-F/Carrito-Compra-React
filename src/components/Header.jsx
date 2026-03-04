import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Button/Button.css";
import Button from "./Button/Button";
const Header = () => {
  return (
    <header className="w-full bg-base-200 p-5 ">
      <div className="w-full mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text">Mi Tienda de compras</h1>
        <nav className="flex gap-6 text-base-content font-medium">
          <Link to="/">Inicio</Link>
          <Link to="/otherpage">
            <Button clase="btn" texto="Otra Página"></Button>
          </Link>
        </nav>
        <Link to="/carrito">
          <FaShoppingCart />
        </Link>
      </div>
    </header>
  );
};

export default Header;
