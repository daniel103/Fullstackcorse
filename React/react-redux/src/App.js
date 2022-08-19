import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { bankActionCreator } from "./redux/index";

const App = () => {
  const state = useSelector((state) => state.bank);
  const dispatch = useDispatch();

  const { withdrawMoney, depositMoney } = bindActionCreators(
    bankActionCreator,
    dispatch
  );

  return (
    <div>
      <div>{state}</div>
      <button onClick={() => depositMoney(500)}>Deposit 500</button>
      <button onClick={() => withdrawMoney(100)}>Withdraw 100</button>
    </div>
  );
};

export default App;
