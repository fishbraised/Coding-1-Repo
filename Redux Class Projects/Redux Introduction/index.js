import { createStore } from "redux";

const actionConstants = {
  deposit: "DEPOSIT",
  withdraw: "WITHDRAW",
};

let initialState = {
  amount: 1000,
};

function reducer(state = initialState, action) {
  if (action.type === actionConstants.deposit) {
    return { amount: state.amount + action.payload };
  } else if (action.type === actionConstants.withdraw) {
    return { amount: state.amount - action.payload };
  }
  return state;
}

function depositAction(payload) {
  return { type: "DEPOSIT", payload };
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(depositAction(1000));

store.dispatch({ type: actionConstants.withdraw, payload: 300 });
