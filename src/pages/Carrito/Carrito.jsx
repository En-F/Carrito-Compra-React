import { Context } from "../../Context/Context";
import ElementoCarrito from "./ElementoCarrito";
import "./Carrito.css";
import CarritoTotal from "./CarritoTotal";

const Carrito = () => {
  return (
    <div>
      <ElementoCarrito />
      <CarritoTotal />
    </div>
  );
};

export default Carrito;
