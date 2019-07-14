import { Action } from 'redux'
import { curry } from 'ramda'

export type ActionWithPayload<T, S> = Action<T> & { payload: S }

// curried function for creating action creators
export const createAction = curry(<T, S>(type: T, payload: S) => (
  { type, payload } as ActionWithPayload<T, S>
))
