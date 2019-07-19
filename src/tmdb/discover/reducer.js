import { prop } from 'ramda'
import { actionTypes } from './actions'

const initialState = {
  query: '',
  filters: {},
  results: {},
}

// case reducers
function saveDiscoverQuery(state, action) {
  const { type, filters } = action.payload
  return { ...state, query: type, filters }
}

function saveDiscoverResults(state, action) {
  const { error, results: oldResults, ...restState } = state
  const { type, results: newResults } = action.payload
  const idList = newResults.map(prop('id'))
  const updatedResults = {
    ...oldResults,
    [type]: idList
  }
  return { ...restState, ...updatedResults }
}

function saveError(state, action) {
  return {
    ...state,
    error: action.payload.message
  }
}

//root reducer
export function discoverReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.DISCOVER: {
      return saveDiscoverQuery(state, action)
    }
    case actionTypes.DISCOVER_SUCCESS: {
      return saveDiscoverResults(state, action)
    }
    case actionTypes.DISCOVER_FAIL: {
      return saveError(state, action)
    }
    default:
      return state;
  }
}
