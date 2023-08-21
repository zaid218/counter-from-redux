// import { legacy_createStore as createStore } from "redux";
// import {createSlice} from '@reduxjs/toolkit'

// const initialState = {
//   counter: 0,
//   showCounter: true,
// };
// createSlice({
//     name: 'counter',
//     initialState,
//     reducers: {
//         increment() { },
//         decrement() { },
//         increase() { },
//         toggleCounter(){}
//     }
// })
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increase") {
//     return {
//       ...state,
//       counter: state.counter + action.amount,
//     };
//   }
//   if (action.type === "increment") {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   }
//   if (action.type === "decrement") {
//       return {
//         ...state,
//       counter: state.counter - 1,
//     };
//     }
//     if (action.type === "toggle") {
//       return {
//         ...state,
//         showCounter: !state.showCounter,
//       };
//     }
//   return state;
// };

// const store = createStore(counterReducer);

// export default store;

//bottom using redux toolkit
import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialCounterState = {
  counter: 0,
  showCounter: true
};
const counterSlice = createSlice({
  name: "counter",
  initialState:initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter =state.counter+ action.payload; //sirf paload name hi rkh skte
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});


const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;