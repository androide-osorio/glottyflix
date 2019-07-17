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

// enum with all action types for TMDB API
export default {
  ...configActionTypes,
  ...discoverActionTypes,
}
