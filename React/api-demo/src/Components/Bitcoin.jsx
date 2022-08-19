import React, { useEffect, useState } from "react";

const Bitcoin = () => {
  const [bitcoinObj, setBitcoinObj] = useState({});

  const fetchBitcoin = async () => {
    try {
      const res = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      const data = await res.json();
      setBitcoinObj(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBitcoin();
  }, []);

  return (
    <div className="bitcoin-wrapper">
      <h1>{bitcoinObj?.chartName}</h1>
      <div className="bitcoin-rate-wrapper">
        <p>{bitcoinObj?.bpi?.USD?.rate}$</p>
        <p>{bitcoinObj?.bpi?.EUR?.rate}€</p>
        <p>{bitcoinObj?.bpi?.GBP?.rate}£</p>
      </div>
      <p>Last update: {bitcoinObj?.time?.updated}</p>
    </div>
  );
};

export default Bitcoin;