import axios from 'axios'
import { curry } from 'ramda'

// extract API Key from environment
const  {
  REACT_APP_TMDB_API_URL,
  REACT_APP_TMDB_API_KEY,
  REACT_APP_TMDB_API_TIMEOUT,
} = process.env

/*
This Axios instance has preconfigured all the headers
and parameters we need to communicate with the TMDB API
*/
export const api = axios.create({
  baseURL: REACT_APP_TMDB_API_URL,
  timeout: REACT_APP_TMDB_API_TIMEOUT,
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
