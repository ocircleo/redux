const { createStore, combineReducers } = require("redux");

//variables
const COUNT_ADD = "ADD",
  COUNT_ADD_BY_VALUE = "ADD_BY_VALUE",
  COUNT_REMOVE = "REMOVE",
  RESET = "RESET";

//initale state (object)
const initialCount = {
  count: 0,
};
const initialUsers = {
  users: ["salman"],
  totalUsers: 1,
};

//action (function that return object)
const incrementState = () => {
  return {
    type: ADD,
  };
};
const incrementStateByValue = (value) => {
  return {
    type: ADD_BY_VALUE,
    payload: value,
  };
};
const decrementState = () => {
  return {
    type: REMOVE,
  };
};
const removeUserState = (value) => {
  return {
    type: REMOVE,
    payload: value,
  };
};
const resetState = () => {
  return {
    type: RESET,
  };
};
//reducer
const countReducer = (state = initialCount, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        count: state.count + 1,
      };
    case ADD_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case REMOVE:
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
const userReducer = (state = initialUsers, action) => {
  switch (action.type) {
    case ADD_BY_VALUE:
      return {
        ...state,
        users: [...state.users, action.payload],
        totalUsers: state.totalUsers + 1,
      };
    case REMOVE:
      const newArr = removeFunc(state.users, action.payload);
      return {
        ...state,
        users: newArr,
        totalUsers: newArr.length,
      };
    case RESET:
      return {
        ...state,
        users: [],
        totalUsers: 0,
      };
    default:
      return state;
  }
};

function removeFunc(array, value) {
  const newArray = array.filter((ele) => ele != value);
  return newArray;
}
//join reducer
const rootReducer = combineReducers({
  countReducer: countReducer,
  userReducer: userReducer,
});
const userStore = createStore(rootReducer);
//subscribe to see result
userStore.subscribe(() => {
  console.log(userStore.getState());
});
//dispatch acition
userStore.dispatch(incrementStateByValue("kamal"));
userStore.dispatch(incrementStateByValue("hossain"));
userStore.dispatch(removeUserState("kamal"));
userStore.dispatch(resetState());
