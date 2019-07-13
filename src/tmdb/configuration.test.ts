import mockAxios from 'axios'
import { getConfig } from './configuration'

jest.mock('axios')

it('can fetch configuration from TMDB', () => {
  const url = `${process.env.REACT_APP_TMDB_API_URL}/configuration`
  const apiKey = process.env.REACT_APP_TMDB_API_KEY

  getConfig()

  expect(mockAxios.get).toHaveBeenNthCalledWith(
    1,
    url,
    { params: { api_key: apiKey } },
  )
})