import { Context } from "../../Context/Context";
import { useContext } from "react";

const CarritoTotal = () => {
  const { carrito } = useContext(Context);

  const total = carrito.reduce(
    (acc, ele) => acc + ele.precio * ele.cantidad,
    0,
  );

  return (
    <div>
      <h3 className="CartTotal">El total a pagar es : {total}</h3>
    </div>
  );
};

export default CarritoTotal;
