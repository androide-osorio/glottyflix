import { get } from '../../common/http'
import TmdbApi from '../api'

// fetch configuration from Api
export const fetchTvDetails = showId => get(TmdbApi, `/tv/${showId}`)
