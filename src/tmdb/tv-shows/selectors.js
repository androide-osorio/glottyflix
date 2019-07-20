import { prop, pathOr, includes } from 'ramda'
import { createSelector } from 'reselect'

export const selectTvShows = pathOr({}, ['tvshows', 'byId'])
export const selectTvShowsIndex = pathOr([], ['tvshows', 'index'])

export const isTvShowPresent = createSelector(
  selectTvShows,
  (_, id) => id,
  (index, id) => includes(id, index),
)

export const selectTvShowWithId = createSelector(
  selectTvShows,
  (_, id) => id,
  (tvShows, id) => prop(id, tvShows)
)
