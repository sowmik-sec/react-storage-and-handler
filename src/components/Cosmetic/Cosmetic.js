import React from "react";
import { addToDb, removeFromDb } from "../../utilities/fakedb";
import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { price, id, name } = props.cosmetic;
  const addToCart = (id) => {
    addToDb(id);
  };

  const removeFromCart = (id) => {
    removeFromDb(id);
  };
  //   const addToCartWithParam = () => addToCart(id);
  return (
    <div className="product">
      <p>id: {id}</p>
      <h2>{name}</h2>
      <p>Only for: $ {price}</p>
      {/* <button onClick={addToCartWithParam}>Add to Cart</button> */}
      <button onClick={() => addToCart(id)}>Add to Cart</button>
      <button onClick={() => removeFromCart(id)}>Remove</button>
    </div>
  );
};

export default Cosmetic;
