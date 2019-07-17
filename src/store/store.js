import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { combineEpics, createEpicMiddleware } from 'redux-observable'

import { tmdbReducersMap } from '../tmdb/store'
import { discoverEpic, fetchConfigEpic } from '../tmdb/effects'

// -----------------------------------

export const rootEpic = combineEpics(
  fetchConfigEpic,
  discoverEpic,
)

export const rootReducer = combineReducers({
  ...tmdbReducersMap
})

// enhancers configuration
const epicMiddleware = createEpicMiddleware()
const composeEnhancers = process.env.NODE_ENV === 'development'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : null

// -----------------------------------

// function to configure the global store
export function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(epicMiddleware)
    ),
  )

  // run epics
  epicMiddleware.run(rootEpic);

  return store;
}
