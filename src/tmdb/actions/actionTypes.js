const configActionTypes = {
  FETCH_CONFIG: 'tmdb/config/fetch',
  FETCH_CONFIG_SUCCESS: 'tmdb/config/fetch/success',
  FETCH_CONFIG_FAIL: 'tmdb/config/fetch/fail',
}

const discoverActionTypes = {
  DISCOVER: 'tmdb/discover',
  DISCOVER_SUCCESS: 'tmdb/discover/success',
  DISCOVER_FAIL: 'tmdb/discover/fail',
}

const tvDetailsActionTypes = {
  FETCH_TV_DETAILS: 'tmdb/tvshows/fetch-details',
  FETCH_TV_DETAILS_SUCCESS: 'tmdb/tvshows/fetch-details/success',
  FETCH_TV_DETAILS_FAIL: 'tmdb/tvshows/fetch-details/fail',
}

// enum with all action types for TMDB API
export default {
  ...configActionTypes,
  ...discoverActionTypes,
  ...tvDetailsActionTypes,
}
