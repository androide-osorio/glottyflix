import createAction from '../../common/store/createAction'

export const actionTypes = {
  FETCH_TV_DETAILS: 'tmdb/tvshows/fetch-details',
  FETCH_TV_DETAILS_SUCCESS: 'tmdb/tvshows/fetch-details/success',
  FETCH_TV_DETAILS_FAIL: 'tmdb/tvshows/fetch-details/fail',
}

// ---------------------------------------------

// actions for the TV details
export const fetchTvShowDetails        = createAction(actionTypes.FETCH_TV_DETAILS)
export const fetchTvShowDetailsSuccess = createAction(actionTypes.FETCH_TV_DETAILS_SUCCESS)
export const fetchTvShowDetailsFail    = createAction(actionTypes.FETCH_TV_DETAILS_FAIL)
