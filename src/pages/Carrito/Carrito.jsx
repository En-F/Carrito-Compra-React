import { Context } from "../../Context/Context";
import ElementoCarrito from "./ElementoCarrito";
import "./Carrito.css";
import CarritoTotal from "./CarritoTotal";
import { useContext } from "react";

const Carrito = () => {
  const { Carrito } = useContext(Context);
  return (
    <>
      <ElementoCarrito />
      <CarritoTotal />
    </>
  );
};

export default Carrito;
