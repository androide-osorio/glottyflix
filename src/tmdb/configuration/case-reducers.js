import { compose, prop, head, includes, adjust, replace } from 'ramda'

const isSizeList = compose( includes('_sizes'), head)
const normalizeListName = adjust(0, replace('_sizes', ''))

/**
 * normalize and save configuration from API
 */
export function saveConfig(state, action) {
  const { error, ...restState } = state
  const { images } = action.payload
  const baseUrl = prop('secure_base_url', images)
  const imageSizes = Object
    .entries(images)
    .filter(isSizeList)
    .map(normalizeListName)

  return {
    ...restState,
    images: {
      baseUrl,
      sizes: Object.fromEntries(imageSizes)
    }
  }
}

export function saveError(state, action) {
  return {
    ...state,
    error: action.payload.message
  }
}
