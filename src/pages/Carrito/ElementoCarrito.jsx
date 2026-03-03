import { Context } from "../../Context/Context";
import { useContext } from "react";

const ElementoCarrito = () => {
  const { carrito } = useContext(Context);

  return carrito.map((producto) => {
    return (
      <div className="product-card-container" key={producto.id}>
        <img src={producto.imagen} className="producto-card" />
        <h3>{producto.titulo}</h3>
        <h4 className="price">{producto.precio}€</h4>
      </div>
    );
  });
};

export default ElementoCarrito;
