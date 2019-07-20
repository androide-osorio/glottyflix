import { compose, prop, propOr, pathOr } from 'ramda'
import { createSelector } from 'reselect';

import { buildPathForImage } from './helpers'

// base selectors
export const selectConfig = prop('config')
export const selectConfigError = pathOr(null, ['config', 'error'])
export const selectImageMeta = compose(propOr({}, 'images'), selectConfig)

// -----------------------------------------------------------
// feature selectors
export const selectPosterPath = size => createSelector(
  selectImageMeta,
  buildPathForImage(size, 'poster'),
)

export const selectBackdropPath = size => createSelector(
  selectImageMeta,
  buildPathForImage(size, 'backdrop'),
)

export const selectLogoPath = size => createSelector(
  selectImageMeta,
  buildPathForImage(size, 'logo'),
)

export const selectProfilePath = size => createSelector(
  selectImageMeta,
  buildPathForImage(size, 'profile'),
)
