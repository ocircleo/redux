const { createStore } = require("redux");

//definig variables
const INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  ADDUSER = "ADDUSER";
//definig state (state is a object)
const counterState = {
  count: 0,
};
const initialUserState = {
  users: [{ name: "salman" }],
};
//action (function wich will return an object may take value as parameter in function)
const incrementCountState = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCounterState = () => {
  return {
    type: DECREMENT,
  };
};
const addUser = (name) => {
  return {
    type: ADDUSER,
    payload: { name: name },
  };
};
console.log("code restarted");

//reducer (A basic swich case)
const counterReducer = (state = counterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(incrementCountState());
store.dispatch(decrementCounterState());
store.dispatch(incrementCountState());
