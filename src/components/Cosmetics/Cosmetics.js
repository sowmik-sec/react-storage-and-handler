import React, { useEffect, useState } from "react";
import { add } from "../../utilities/calculate";
import Cosmetic from "../Cosmetic/Cosmetic";

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([]);
  useEffect(() => {
    fetch(`data.json`)
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);
  return (
    <div>
      <h1>These men are for sell.</h1>
      {cosmetics.map((cosmetic) => (
        <Cosmetic cosmetic={cosmetic} key={cosmetic.id}></Cosmetic>
      ))}
    </div>
  );
};

export default Cosmetics;
