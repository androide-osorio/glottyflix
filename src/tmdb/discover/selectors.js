import { pick, prop, path } from 'ramda'
import { createSelector } from 'reselect'

export const selectDiscover = prop('discover')
export const selectResultType = (_, type) => type

// ----------------------------------------------------

export const selectSearchQuery = createSelector(
  [selectDiscover],
  pick(['query', 'filters'])
)

export const selectDiscoverResults = createSelector(
  [selectDiscover, selectResultType],
  (discover, resultType) => path(['results', resultType], discover)
)