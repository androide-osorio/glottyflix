import { curry, find, equals, pathOr } from 'ramda'

export const buildPathForImage = curry((size, type, images) => {
  if (!images || Object.keys(images).length === 0) return '';
  console.log(size, type, images)
  const { baseUrl } = images
  const sizes = pathOr([], ['sizes', type], images)
  const width = find(equals(size), sizes) || 'original'

  return `${baseUrl}${width}`
})
