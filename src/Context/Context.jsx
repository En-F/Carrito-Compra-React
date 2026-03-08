import { createContext, useReducer } from "react";

export const Context = createContext();

const initialState = [];
const reducer = (state, action) => {
  try {
    const { type: actionType, payload: actionPayload } = action;
    const id = actionPayload?.id;
    switch (actionType) {
      case "AGREGAR_PRODUCTO": {
        const ProductoRepetido = state.find((item) => item.id === id);

        if (ProductoRepetido) {
          return state.map((item) =>
            item.id === id
              ? { ...item, cantidad: (ProductoRepetido.cantidad || 1) + 1 }
              : item,
          );
        }
        return [...state, { ...actionPayload, cantidad: 1 }];
      }
      case "RESTAR_CANTIDAD": {
        const productoExistente = state.find((item) => item.id === id);
        if (productoExistente && productoExistente.cantidad > 1) {
          return state.map((item) =>
            item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item,
          );
        }
        return state.filter((item) => item.id !== id);
      }
      case "ELIMINAR_PRODUCTO_COMPLETO":
        return state.filter((item) => item.id !== id);
      case "LIMPIAR_CARRITO":
        return [];
      default:
        return state;
    }
  } catch (error) {
    console.error("Error en el Reducer:", error.message);
    return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const ComprarProducto = (producto) =>
    dispatch({
      type: "AGREGAR_PRODUCTO",
      payload: producto,
    });

  const BorrarCantidadProducto = (producto) =>
    dispatch({
      type: "RESTAR_CANTIDAD",
      payload: producto,
    });

  const VaciarCarrito = () =>
    dispatch({
      type: "LIMPIAR_CARRITO",
    });

  const EliminarDelTodo = (producto) =>
    dispatch({ type: "ELIMINAR_PRODUCTO_COMPLETO", payload: producto });

  //chidren a los hijos que parten de el acceser a los datos que se envían en el value
  return (
    <Context.Provider
      value={{
        carrito: state,
        ComprarProducto,
        BorrarCantidadProducto,
        VaciarCarrito,
        EliminarDelTodo,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
