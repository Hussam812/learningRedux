console.log(Redux);

const withdraw = (amount) => ({ type: "WITHDRAW_MONEY", payload: amount });
const diposite = (amount) => ({ type: "DEPOST_MONEY", payload: amount });
const addProduct = (payload) => ({ type: "AddProduct", payload });
const bankReducer = (state = 1000, action) => {
  switch (action.type) {
    case "WITHDRAW_MONEY":
      return state - action.payload;
    case "DEPOST_MONEY":
      return state + action.payload;
    default:
      return state;
  }
};
const productReducer = (state = [], action) => {
  switch (action.type) {
    case "AddProduct":
      return [...state, action.payload];
    default:
      return state;
  }
};
//console.log(store.getState());

const appReducer = Redux.combineReducers({
  bank: bankReducer,
  product: productReducer,
});

const store = Redux.createStore(appReducer);
//console.log(store.getState().bank);
const depbtn = document.getElementById("deposite");
depbtn.addEventListener("click", () => {
  store.dispatch(diposite(100));
});

const withdebtn = document.getElementById("Withdraw");
withdebtn.addEventListener("click", () => {
  store.dispatch(withdraw(100));
});
const viewState = document.getElementById("state");
viewState.innerHTML = `State:  ${store.getState().bank}`;

store.subscribe(() => {
  viewState.innerHTML = `State:  ${store.getState().bank}`;
  console.log(store.getState());

  console.log("Current State: ", store.getState());
});
