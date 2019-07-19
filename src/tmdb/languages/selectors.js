import { prop, propOr, path, memoizeWith, identity } from 'ramda'
import { createSelector } from 'reselect'

export const selectLanguages = propOr([], path('languages', 'byId'))
export const selectLanguagesIndex = propOr([], path('languages', 'index'))

export const selectLanguagesList = createSelector(
  [selectLanguages],
  byId => Object.values(byId),
)

export const selectLanguageWithCode = createSelector(
  selectLanguages,
  tvShows => memoizeWith(identity, id => prop(id, tvShows)),
)
