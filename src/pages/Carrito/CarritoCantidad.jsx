import { useContext } from "react";
import { Context } from "../../Context/Context";
import ElementoCarrito from "./ElementoCarrito";
const CarritoCantidad = ({ producto }) => {
  const { carrito, setCarrito } = useContext(Context);

  const sumar = (producto) => {};
  const restar = (producto) => {};

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
