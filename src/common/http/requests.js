import { curry, useWith, propOr, mergeDeepLeft } from 'ramda'

// extract params from Axios request config
const getRequestParams = propOr({}, 'params')

// UrlSearchParams -> UrlSearchParams -> UrlSearchParams
export const mergeWithDefaultParams = useWith(
  mergeDeepLeft,
  [getRequestParams, getRequestParams]
)

/*
For this app, the most important API requests are GET requests and
its query parameters. Therefore, I only took care
of correctly merging query parameters
*/
// perform a GET Request
export const get = curry((instance, url, config) => {
  const { defaults } = instance
  const params = mergeWithDefaultParams(defaults, config)

  return instance.get(url, { ...config, params })
})
