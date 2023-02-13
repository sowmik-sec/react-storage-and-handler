import React from "react";

const Cosmetic = (props) => {
  const { price, id, name } = props.cosmetic;
  return (
    <div>
      <p>id: {id}</p>
      <h2>{name}</h2>
      <p>Only for: $ {price}</p>
    </div>
  );
};

export default Cosmetic;
