import { actionTypes } from './actions'

import { saveConfig, saveError } from './case-reducers'

const initialState = {
  images: {
    baseUrl: '',
    sizes: {},
  }
}

export const configReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CONFIG_SUCCESS: {
      return saveConfig(state, action)
    }
    case actionTypes.FETCH_CONFIG_FAIL: {
      return saveError(state, action)
    }
    default:
      return state;
  }
}
