import { curry } from 'ramda'

const actionCreator = (type, payload) => (
  { type, ...(payload && { payload }) }
)

// curried function for creating action creators
export const createAction = curry(actionCreator)
