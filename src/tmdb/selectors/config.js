import { curry, memoize } from 'ramda'
// import createSelector from 'reselect'

export const getConfig = state => state.config

export const selectPosterPath = curry((size, state) => {
  const { images } = state.config
  if (!images) {
    return '';
  }
  const w = images.poster_sizes
    ? images.poster_sizes.find(s => s === size)
    : 'original'

  return `${images.secure_base_url}${w}/`
})