console.log(Redux);

const action = {
  type: "WITHDRAW_MONEY",
};
const action2 = {
  type: "DEPOST_MONEY",
};
const reducer = (state = 1000, action) => {
  switch (action.type) {
    case "WITHDRAW_MONEY":
      return state - 100;
    case "DEPOST_MONEY":
      return state + 100;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);
console.log(store.getState());

const depbtn = document.getElementById("deposite");
depbtn.addEventListener("click", () => {
  store.dispatch(action2);
});

const withdebtn = document.getElementById("Withdraw");
withdebtn.addEventListener("click", () => {
  store.dispatch(action);
});

store.subscribe(() => {
  const viewState = document.getElementById("state");
  viewState.innerHTML = `State:  ${store.getState()}`;
  console.log(store.getState());

  console.log("Current State: ", store.getState());
});
