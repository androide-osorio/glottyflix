import { prop } from 'ramda'
import { actionTypes } from './actions'

const initialState = {
  byId: {},
  index: [],
}

// case reducers
function saveEntities(state, action) {
  const langList = action.payload
  const { error, ...restState } = state
  const ids = langList.map(prop('iso_639_1'))
  const entityMap = langList.reduce((map, lang) => ({ ...map, [lang.iso_639_1]: lang }), {})

  return {
    ...restState,
    byId: entityMap,
    index: ids,
  }
}

function saveError(state, action) {
  return {
    ...state,
    error: action.payload.message
  }
}

// root reducer
export function languagesReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_LANGUAGES_SUCCESS: {
      return saveEntities(state, action)
    }
    case actionTypes.FETCH_LANGUAGES_FAIL: {
      return saveError(state, action)
    }
    default:
      return state;
  }
}
