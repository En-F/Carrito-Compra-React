import { useContext } from "react";
import { Context } from "../../Context/Context";
import ElementoCarrito from "./ElementoCarrito";
const CarritoCantidad = ({ producto }) => {
  const { carrito, ComprarProducto, BorrarCantidadProducto } =
    useContext(Context);

  const sumar = (producto) => {
    try {
      ComprarProducto(producto);
    } catch (error) {
      console.log(error.message);
    }
  };
  const restar = (producto) => {
    try {
      BorrarCantidadProducto(producto);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="contenedor-cantidad">
      <button className="btn-operacion" onClick={() => restar(producto)}>
        -
      </button>
      <span className="numero-cantidad">{producto.cantidad}</span>
      <button className="btn-operacion" onClick={() => sumar(producto)}>
        +
      </button>
    </div>
  );
};

export default CarritoCantidad;
