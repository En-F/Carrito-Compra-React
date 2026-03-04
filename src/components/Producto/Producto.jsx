import { useContext, useState, useEffect } from "react";
import "./Producto.css";
import "../Button/Button.css";
import Button from "../Button/Button";
import { Context } from "../../Context/Context";

const Cart = () => {
  const [productos, setproductos] = useState([]);
  //Los valores viene del Context
  const { ComprarProducto } = useContext(Context);

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
          <img src={producto.imagen} />

          <div className="product-info">
            <h2>{producto.titulo}</h2>
            <span className="price">{producto.precio}€</span>
            <p>{producto.descripcion}</p>
          </div>

          <div className="product-footer">
            <Button
              onClick={() => ComprarProducto(producto)}
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
