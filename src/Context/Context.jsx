import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [cart, setCar] = useState([]);

  //chidren a los hijos que parten de el acceser a los datos que se envían en el value
  return <Context.Provider value={[cart, setCar]}>{children}</Context.Provider>;
};

export default ContextProvider;
