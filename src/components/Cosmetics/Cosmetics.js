import React, { useEffect, useState } from "react";
import { add, getTotal } from "../../utilities/calculate";
import Cosmetic from "../Cosmetic/Cosmetic";

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([]);
  useEffect(() => {
    fetch(`data.json`)
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);
  const total = getTotal(cosmetics);
  return (
    <div>
      <h1>These men are for sell.</h1>
      <p>Total money needed: {total}</p>
      {cosmetics.map((cosmetic) => (
        <Cosmetic cosmetic={cosmetic} key={cosmetic.id}></Cosmetic>
      ))}
    </div>
  );
};

export default Cosmetics;
