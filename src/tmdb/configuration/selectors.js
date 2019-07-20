import { compose, prop, propOr, pathOr } from 'ramda'
import { createSelector } from 'reselect';

import { buildPathForImage } from './helpers'

// base selectors
export const selectConfig = prop('config')
export const selectConfigError = pathOr(null, ['config', 'error'])
export const selectImageMeta = compose(propOr({}, 'images'), selectConfig)
const selectImageSize = (_, imageSize) => imageSize

// -----------------------------------------------------------
// feature selectors

export const selectPosterPath = createSelector(
  [selectImageMeta, selectImageSize],
  (imagesMeta, imageSize) => buildPathForImage(imageSize, 'poster', imagesMeta)
)

export const selectBackdropPath = createSelector(
  [selectImageMeta, selectImageSize],
  (imagesMeta, imageSize) => buildPathForImage(imageSize, 'backdrop', imagesMeta)
)

export const selectLogoPath = createSelector(
  [selectImageMeta, selectImageSize],
  (imagesMeta, imageSize) => buildPathForImage(imageSize, 'logo', imagesMeta)
)

export const selectProfilePath = createSelector(
  [selectImageMeta, selectImageSize],
  (imagesMeta, imageSize) => buildPathForImage(imageSize, 'profile', imagesMeta)
)
