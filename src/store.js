import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { combineEpics, createEpicMiddleware } from 'redux-observable'

// stores for app modules
import { tmdbReducersMap, tmdbEpic } from '../tmdb/store'

// -----------------------------------

export const rootEpic = combineEpics(tmdbEpic)

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
