import { get } from '../../common/http'
import TmdbApi from '../api'

export const discoverTvShows = get(TmdbApi, `discover/tv`)
export const discoverTvMovies = get(TmdbApi, `discover/movies`)
