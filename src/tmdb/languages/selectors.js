import { prop, pathOr, values } from 'ramda'
import { createSelector } from 'reselect'

export const selectLanguages = pathOr({}, ['languages', 'byId'])
export const selectLanguagesIndex = pathOr([], ['languages', 'index'])

export const selectLanguagesList = createSelector(
  [selectLanguages],
  values
)

export const selectLanguageWithCode = createSelector(
  selectLanguages,
  (_, code) => code,
  prop
)
