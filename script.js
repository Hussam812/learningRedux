console.log(Redux);

const withdraw = (amount) => ({ type: "WITHDRAW_MONEY", payload: amount });
const diposite = (amount) => ({ type: "DEPOST_MONEY", payload: amount });
const reducer = (state = 1000, action) => {
  switch (action.type) {
    case "WITHDRAW_MONEY":
      return state - action.payload;
    case "DEPOST_MONEY":
      return state + action.payload;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);
console.log(store.getState());

const depbtn = document.getElementById("deposite");
depbtn.addEventListener("click", () => {
  store.dispatch(diposite(100));
});

const withdebtn = document.getElementById("Withdraw");
withdebtn.addEventListener("click", () => {
  store.dispatch(withdraw(200));
});
const viewState = document.getElementById("state");
viewState.innerHTML = `State:  ${store.getState()}`;

store.subscribe(() => {
  viewState.innerHTML = `State:  ${store.getState()}`;
  console.log(store.getState());

  console.log("Current State: ", store.getState());
});
