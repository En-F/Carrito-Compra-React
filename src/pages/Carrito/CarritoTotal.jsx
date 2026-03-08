import { Context } from "../../Context/Context";
import { useContext } from "react";

const CarritoTotal = () => {
  const { carrito } = useContext(Context);

  const total = carrito
    .reduce((acc, ele) => acc + ele.precio * ele.cantidad, 0)
    .toFixed(2);

  if (carrito.length === 0) {
    return (
      <div className="carrito-vacio">
        <span>El carrito esta vacío.</span>
      </div>
    );
  }

  return (
    <div>
      <h3 className="CartTotal">El total a pagar es : {total}€</h3>
    </div>
  );
};

export default CarritoTotal;
