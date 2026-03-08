import { Context } from "../../Context/Context";
import { useContext } from "react";
import CarritoCantidad from "./CarritoCantidad";

const ElementoCarrito = () => {
  const { carrito, EliminarDelTodo } = useContext(Context);

  return carrito.map((producto) => {
    return (
      <div className="estructura-card" key={producto.id}>
        <div className="product-card-container">
          <img src={producto.imagen} className="producto-card" />
          <h3>{producto.titulo}</h3>
          <CarritoCantidad producto={producto} />
          <h4 className="price">
            {(producto.precio * producto.cantidad).toFixed(2)}€
          </h4>
          <h3
            className="borrar-eleCar"
            onClick={() => EliminarDelTodo(producto)}
          >
            ❌
          </h3>
        </div>
      </div>
    );
  });
};

export default ElementoCarrito;
