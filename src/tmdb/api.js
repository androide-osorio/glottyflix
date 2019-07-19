import { get } from './http'

import axios from 'axios'

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
const TmdbApi = axios.create({
  baseURL: REACT_APP_TMDB_API_URL,
  timeout: parseInt(REACT_APP_TMDB_API_TIMEOUT, 10),
  params: {
    api_key: REACT_APP_TMDB_API_KEY,
  }
})

export default TmdbApi
