import { compose, memoizeWith, prop, propOr, concat } from 'ramda'
import { createSelector } from 'reselect';

import { buildPathForImage } from '../helpers/config'

export const getConfig = prop('config')
export const getImageMeta = compose(propOr({}, 'images'), getConfig)


export const selectPosterPath = size => createSelector(
  getImageMeta,
  memoizeWith(concat, buildPathForImage(size, 'poster')),
)
