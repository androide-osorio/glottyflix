import { api, get } from './http'

export const getConfig = get(api, `configuration`)
export const discoverTvShows = get(api, `discover/tv`)
export const fetchTvDetails = showId => get(api, `/tv/${showId}`)
