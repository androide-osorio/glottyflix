import { compose, prop, propOr, path } from 'ramda'
import { createSelector } from 'reselect';

import { buildPathForImage } from './helpers'

// base selectors
export const getConfig = prop('config')
export const getConfigError = propOr(null, path('config', 'error'))
export const getImageMeta = compose(propOr({}, 'images'), getConfig)

// -----------------------------------------------------------
// feature selectors
export const selectPosterPath = size => createSelector(
  getImageMeta,
  buildPathForImage(size, 'poster'),
)

export const selectBackdropPath = size => createSelector(
  getImageMeta,
  buildPathForImage(size, 'backdrop'),
)

export const selectLogoPath = size => createSelector(
  getImageMeta,
  buildPathForImage(size, 'logo'),
)

export const selectProfilePath = size => createSelector(
  getImageMeta,
  buildPathForImage(size, 'profile'),
)
