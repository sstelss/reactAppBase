import { ADD_COUNTER, REDUCE_COUNTER } from "./types"

const initialState = {
  counter: 0
}

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return {...state, counter: state.counter + 1 }
    case REDUCE_COUNTER:
      return {...state, counter: state.counter - 1 }
    default:
      return state
  }
}