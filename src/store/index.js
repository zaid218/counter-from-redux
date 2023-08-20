import { legacy_createStore as createStore } from "redux";
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  counter: 0,
  showCounter: true,
};
createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment() { },
        decrement() { },
        increase() { },
        toggleCounter(){}
    }
})
const counterReducer = (state = initialState, action) => {
  if (action.type === "increase") {
    return {
      ...state,
      counter: state.counter + action.amount,
    };
  }
  if (action.type === "increment") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
      return {
        ...state,
      counter: state.counter - 1,
    };
    }
    if (action.type === "toggle") {
      return {
        ...state,
        showCounter: !state.showCounter,
      };
    }
  return state;
};

const store = createStore(counterReducer);

export default store;



//bottom using redux toolkit
import { createSlice } from "@reduxjs/toolkit";
import { legacy_createStore as createStore } from "redux";
const initialState = {
  counter: 0,
  showCounter: true,
};
createSlice({
  name: "counter",
  initialState,
  reducers: {
      increment(state) {
          state.counter++
    },
      decrement(state) {
        state.counter--
    },
      increase(state,action) {
        state.counter=state.counter+action.amount
    },
      toggleCounter() {
        state.showCounter=!state.showCounter
    },
  },
});

const store=createStore(createSlice.reducer)