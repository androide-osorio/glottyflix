import { get } from '../../common/http'
import TmdbApi from '../api'

// fetch configuration from Api
export const fetchLanguages = get(TmdbApi, '/configuration/languages')
