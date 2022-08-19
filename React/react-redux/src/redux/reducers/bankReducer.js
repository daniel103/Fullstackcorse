const initialState = 500;

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(`Action type ${type} received`);

  switch (type) {
    case "deposit":
      return state + payload;
    case "withdraw":
      return state - payload;
    default:
      return state;
  }
};

export default reducer;
