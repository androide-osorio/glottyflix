import { curry, find, equals, prop, propOr } from 'ramda'

export const buildPathForImage = curry((size, type, images) => {
  if (!images) return '';

  const { secure_base_url } = images
  const sizes = propOr([], `${type}_sizes`, images)
  const width = find(equals(size), sizes) || 'original'

  return `${secure_base_url}${width}/`
})
