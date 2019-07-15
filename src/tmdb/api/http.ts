import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
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

export const get = curry((instance: AxiosInstance, url: string, config: AxiosRequestConfig) => {
  const defaultParams: { [n: string]: string } = api.defaults.params
  return api.get(url, {
    params: { ...defaultParams, ...config.params }
  })
})
