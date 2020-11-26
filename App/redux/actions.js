import { ADD_COUNTER, REDUCE_COUNTER } from './types'

export function addCounter() {
  return {
    type: ADD_COUNTER
  }
}

export function reduceCounter() {
  return {
    type: REDUCE_COUNTER
  }
}
