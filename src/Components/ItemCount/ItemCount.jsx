import React from "react";
import { useState } from "react";
const ItemCount = ({ stock, initial, onAdd }) => {
  //
  const [contador, setContador] = useState(initial);
  //
  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  //
  const resta = () => {
    if (contador > 1) setContador(contador - 1);
  };
  //
  return (
    <div>
      <h1>ItemCount</h1>
      <h2>{contador}</h2>
      <button onClick={sumar}>Sumar</button>

      <button onClick={resta}>Restar</button>
      <button onClick={() => onAdd(contador)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
