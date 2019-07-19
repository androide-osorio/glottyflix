import { curry } from 'ramda'

const actionCreator = (type, payload) => (
  { type, ...(payload && { payload }) }
)

// curried function for creating action creators
const createAction = curry(actionCreator)

export default createAction
