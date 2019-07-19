import { prop, propOr, path, includes, memoizeWith, identity } from 'ramda'
import { createSelector } from 'reselect'

export const selectTvShows = propOr([], path('tvshows', 'byId'))
export const selectTvShowsIndex = propOr([], path('tvshows', 'index'))

export const isTvShowPresent = createSelector(
  [selectTvShowsIndex],
  index => memoizeWith(identity, id => includes(id, index)),
)

export const selectTvShowWithId = createSelector(
  selectTvShows,
  tvShows => memoizeWith(identity, id => prop(id, tvShows))
)
