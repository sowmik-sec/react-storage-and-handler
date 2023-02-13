import React from "react";
import { multiply, subtract } from "../../utilities/calculate";

const Shoes = () => {
  const first = 52;
  const second = 23;
  const result = multiply(first, second);
  const resultSubtract = subtract(first, second);
  return (
    <div>
      <h3>This is Shoes Combo</h3>
      <p>
        <small>Result: {result}</small>
      </p>
      <p>
        <small>SubTotal: {resultSubtract}</small>
      </p>
    </div>
  );
};

export default Shoes;
