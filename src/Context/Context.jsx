import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  //chidren a los hijos que parten de el acceser a los datos que se envían en el value
  return (
    <Context.Provider value={{ carrito, setCarrito }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
