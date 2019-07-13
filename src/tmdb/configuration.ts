import axios from 'axios'
import { curry } from 'ramda'

// extract API Key from environment
const  { REACT_APP_TMDB_API_URL, REACT_APP_TMDB_API_KEY } = process.env

const get = curry((apiKey: string, url: string) => {
  return axios.get(url, {
    params: { api_key: apiKey }
  })
})

export const getConfig = () => get(
  REACT_APP_TMDB_API_KEY as string,
  `${REACT_APP_TMDB_API_URL}/configuration`
)
