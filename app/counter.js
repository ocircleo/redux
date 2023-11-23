const { createStore } = require("redux");

console.log("testing counter");
/**
 * Defining variable
 * Defining State (object)
 * Definig Action (function that will return an object)
 * Making a reducer
 * creating a store
 * subscribing a store + console the getstate()
 * dispatching action
 */
//step 1 variables
const INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  RESET = "RESET";
//step 2 initaial state
const initaialCountState = {
  count: 0,
};
//step 3 Action
const incrementCountState = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCountState = () => {
  return {
    type: DECREMENT,
  };
};
const resetCountState = () => {
  return {
    type: RESET,
  };
};
//step 4 reducer
const counterReducer = (state = initaialCountState, action) => {
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
    case RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

//step 5 creating a store
const countStore = createStore(counterReducer);

//step 6 subscribing to store
countStore.subscribe(() => {
  console.log(countStore.getState());
});

//dispatching action

countStore.dispatch(incrementCountState());
countStore.dispatch(incrementCountState());
countStore.dispatch(decrementCountState());
countStore.dispatch(incrementCountState());
countStore.dispatch(resetCountState());
