import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const ComprarProducto = (producto) => {
    const ProductoRepetido = carrito.find((item) => item.id === producto.id);

    if (ProductoRepetido) {
      setCarrito(
        carrito.map((elemento) =>
          elemento.id === producto.id
            ? { ...elemento, cantidad: ProductoRepetido.cantidad + 1 }
            : elemento,
        ),
      );
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const BorrarProducto = (producto) => {
    const ProductoRepetido = carrito.find((item) => item.id === producto.id);

    ProductoRepetido.cantidad !== 1 &&
      setCarrito(
        carrito.map((elemento) =>
          elemento.id === producto.id
            ? { ...elemento, cantidad: ProductoRepetido.cantidad - 1 }
            : elemento,
        ),
      );
  };

  //chidren a los hijos que parten de el acceser a los datos que se envían en el value
  return (
    <Context.Provider
      value={{ carrito, setCarrito, ComprarProducto, BorrarProducto }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
