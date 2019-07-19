import { curry } from 'ramda'

/*
For this app, the most important part of the requests
are the query parameters. Therefore, I only took care
of correctly merging those
*/
// perform a GET Request
export const get = curry((instance, url, config) => {
  const defaultParams = instance.defaults.params || {}
  const {params, ...restconfig} = config
  const mergedParams = { ...defaultParams, ...config.params }

  return instance.get(url, {
    ...restconfig,
    params: mergedParams
  })
})
