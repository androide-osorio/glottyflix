import { compose, prop, propOr, memoizeWith, identity } from 'ramda'
import { createSelector } from 'reselect';

import { buildPathForImage } from '../helpers/config'

export const getConfig = prop('config')
export const getImageMeta = compose(propOr({}, 'images'), getConfig)


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
