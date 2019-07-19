import { curry, useWith, propOr, mergeDeepLeft } from 'ramda'

const getRequestParams = propOr({}, 'params')

// UrlSearchParams -> UrlSearchParams -> UrlSearchParams
export const mergeWithDefaultParams = useWith(
  mergeDeepLeft,
  [getRequestParams, getRequestParams]
)

/*
For this app, the most important part of the requests
are the query parameters. Therefore, I only took care
of correctly merging those
*/
// perform a GET Request
export const get = curry((instance, url, config) => {
  const { defaults } = instance
  const params = mergeWithDefaultParams(defaults, config)

  return instance.get(url, { ...config, params })
})
