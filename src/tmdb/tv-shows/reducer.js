import { equals, update } from 'ramda'
import { actionTypes } from './actions'

const initialState = {
  byId: {},
  index: [],
}

// case reducers
function saveEntity(state, action) {
  const newShow = action.payload
  const tvShowId = newShow.id
  const { byId: oldEntities, index: oldIndex } = state.byId
  const showIdIndex = oldIndex.findIndex(equals(tvShowId))
  const updatedIndex = showIdIndex !== -1
    ? update(showIdIndex, tvShowId, oldIndex)
    : oldIndex.concat([tvShowId])

  return {
    ...state,
    byId: {...oldEntities, [tvShowId]: newShow },
    index: updatedIndex,
  }
}

function saveError(state, action) {
  return {
    ...state,
    error: action.payload.message
  }
}

// root reducer
export const tvShowsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TV_DETAILS_SUCCESS: {
      return saveEntity(state, action)
    }
    case actionTypes.FETCH_TV_DETAILS_FAIL: {
      return saveError(state, action)
    }
    default:
      return state;
  }
}
