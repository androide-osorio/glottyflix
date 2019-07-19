import actionTypes from '../actions/actionTypes'

import {saveConfig, saveError} from './case-reducers'

const initialState = {
  images: {
    baseUrl: '',
    sizes: {},
  },
  change_keys: []
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
