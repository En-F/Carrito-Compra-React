import { useState, useEffect } from "react";
import "../Cart/Cart.css";
import "../Button/Button.css";
import Button from "../Button/Button";

const Cart = () => {
  const [productos, setproductos] = useState([]);

  function handleClick() {
    console.log("Hola");
  }

  useEffect(() => {
    fetch("/datos/productos.json")
      .then((resultado) => resultado.json())
      .then((datos) => setproductos(datos))
      .catch((err) => console.error("Error al obtener productos:", err));
  }, []);

  return (
    <div className="products-grid">
      {productos.map((producto) => (
        <div className="product-card" key={producto.id}>
          <img src={producto.image} />

          <div className="product-info">
            <h2>{producto.title}</h2>
            <span className="price">{producto.price}€</span>
            <p>{producto.description}</p>
          </div>

          <div className="product-footer">
            <Button
              onClick={handleClick}
              clase="btn-add"
              texto="Comprar"
            ></Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
