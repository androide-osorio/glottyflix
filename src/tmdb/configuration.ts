import axios from 'axios'

// extract API Key from environment
const  { TMDB_API_URL, TMDB_API_KEY } = process.env

export function getConfig(apiKey: string, url = TMDB_API_URL) {
  return axios.get(`${url}/configuration`, {
    params: { api_key: apiKey }
  })
}
