import createAction from '../../common/store/createAction'

export const actionTypes = {
  DISCOVER: 'tmdb/discover',
  DISCOVER_SUCCESS: 'tmdb/discover/success',
  DISCOVER_FAIL: 'tmdb/discover/fail',
}

// ---------------------------------------------
// actions for calling discover endpoint
export const discover        = createAction(actionTypes.DISCOVER)
export const discoverSuccess = createAction(actionTypes.DISCOVER_SUCCESS)
export const discoverFail    = createAction(actionTypes.DISCOVER_FAIL)
