import { Context } from "../../Context/Context";
import { useContext } from "react";
import CarritoCantidad from "./CarritoCantidad";

const ElementoCarrito = () => {
  const { carrito, setCarrito } = useContext(Context);

  const borrarProducto = (id) => {
    const encotrarId = carrito.find((elemento) => elemento.id === id);

    const carritoNuevo = carrito.filter((elemento) => {
      return elemento !== encotrarId;
    });

    setCarrito(carritoNuevo);
  };

  return carrito.map((producto) => {
    return (
      <div className="product-card-container" key={producto.id}>
        <img src={producto.imagen} className="producto-card" />
        <h3>{producto.titulo}</h3>
        <CarritoCantidad producto={producto} />
        <h4 className="price">{producto.precio}€</h4>
        <h3
          className="borrar-eleCar"
          onClick={() => borrarProducto(producto.id)}
        >
          ❌
        </h3>
      </div>
    );
  });
};

export default ElementoCarrito;
