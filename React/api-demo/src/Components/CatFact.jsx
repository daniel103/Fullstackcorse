import React, { useEffect, useState } from "react";

const CatFact = () => {
  const [fact, setFact] = useState("");

  const fetchCatFact = async () => {
    try {
      const res = await fetch("https://catfact.ninja/fact");
      const data = await res.json();
      setFact(data.fact);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div className="cat-fact-wrapper">
      <h5>{fact}</h5>
    </div>
  );
};

export default CatFact;
