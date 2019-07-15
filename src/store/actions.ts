import { Action } from 'redux'
import { curry } from 'ramda'

export type ActionWithPayload<T, S = any> = Action<T> & { payload: S }
export type ActionCreator = <T, S = {}>(type: T, payload: S) => ActionWithPayload<T, S>

const actionCreator: ActionCreator = <T, S>(type: T, payload?: S) => (
  { type, ...(payload && { payload }) } as ActionWithPayload<T, S>
)

// curried function for creating action creators
export const createAction = curry<ActionCreator>(actionCreator)
