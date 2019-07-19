import { pick, prop, path, memoizeWith, identity } from 'ramda'
import { createSelector } from 'reselect'

export const selectDiscover = prop('discover')

export const selectSearchQuery = createSelector(
  [selectDiscover],
  pick(['query', 'filters'])
)

export const selectSearchResultsIndex = createSelector(
  [selectDiscover],
  discover => memoizeWith(
    identity, type => prop(path(['results', type]), discover)
  )
)