import createAction from '../../common/store/createAction'

export const actionTypes = {
  FETCH_LANGUAGES: 'tmdb/languages/fetch',
  FETCH_LANGUAGES_SUCCESS: 'tmdb/languages/fetch/success',
  FETCH_LANGUAGES_FAIL: 'tmdb/languages/fetch/fail',
}

// ---------------------------------------------

// actions for the TV details
export const fetchLanguages        = createAction(actionTypes.FETCH_LANGUAGES)
export const fetchLanguagesSuccess = createAction(actionTypes.FETCH_LANGUAGES_SUCCESS)
export const fetchLanguagesFail    = createAction(actionTypes.FETCH_LANGUAGES_FAIL)
