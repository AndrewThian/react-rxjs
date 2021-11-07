import { createStore } from 'redux'

const initialState = {
  value: 0
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 };
    case "counter/decremented":
      return { value: state.value - 1 };
    case "counter/reseted":
      return initialState;
    default:
      return state;
  }
};

export const store = createStore(counterReducer);