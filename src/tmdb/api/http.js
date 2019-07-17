import axios from 'axios'
import { curry } from 'ramda'

// extract API Key from environment
const  {
  REACT_APP_TMDB_API_URL,
  REACT_APP_TMDB_API_KEY
} = process.env

export const api = axios.create({
  baseURL: REACT_APP_TMDB_API_URL,
  timeout: 1000,
  params: {
    api_key: REACT_APP_TMDB_API_KEY,
  }
})

// perform a GET Request
export const get = curry((instance, url, config) => {
  const defaultParams = api.defaults.params
  return instance.get(url, {
    params: { ...defaultParams, ...config.params }
  })
})
