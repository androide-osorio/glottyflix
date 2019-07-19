import { propEq, find } from 'ramda'
import { createSelector } from 'reselect'

export const selectTvShows = (state) => state.tvshows.items
export const selectTvDetails = (state) => state.tvshows.details

export const selectTvShowWithId = id => createSelector(
  selectTvDetails,
  details => {
    const getId = propEq('id')
    const findFunction = find(getId(parseInt(id)))
    return findFunction(details, id)
  }
)
