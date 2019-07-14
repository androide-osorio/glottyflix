import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { combineEpics, createEpicMiddleware } from 'redux-observable'

import { configReducer, fetchConfigEpic } from './tmdb/store'

export const rootEpic = combineEpics(
  fetchConfigEpic,
)

export const rootReducer = combineReducers({
  config: configReducer,
})

// enhancers configuration
const epicMiddleware = createEpicMiddleware()
const composeEnhancers = process.env.NODE_ENV === 'development'
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : null

// -----------------------------------

// function to configure the global store
export default function configureStore() {
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
