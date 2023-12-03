import React from "react";
import { useClima } from "../hooks/useClima";

export const Temperatura = () => {
  const { resultado } = useClima();
  const { name, main } = resultado;
  const kelvin = 273.15;
  return (
    <div className="contenedor">
      <h2 className="temperatura">Temperatura de: {name} </h2>
      <p className="temperatura__actual">
       {parseInt(main.temp - kelvin)} <span>&#x2103;</span>{" "}
      </p>
      <div className="temperatura__contenedor">
        <p className="temperatura__min">
          Min: {parseInt(main.temp_min - kelvin)}{" "}
          <span>&#x2103;</span>{" "}
        </p>
        <p className="temperatura__max">
          Max: {parseInt(main.temp_max - kelvin)}{" "}
          <span>&#x2103;</span>{" "}
        </p>
      </div>
    </div>
  );
};
