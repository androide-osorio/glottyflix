import axios from 'axios'
import { curry } from 'ramda'

// extract API Key from environment
const  { REACT_APP_TMDB_API_URL } = process.env

const get = curry((url: string, apiKey: string) => {
  return axios.get(url, {
    params: { api_key: apiKey }
  })
})

export const getConfig = get(`${REACT_APP_TMDB_API_URL}/configuration`)
