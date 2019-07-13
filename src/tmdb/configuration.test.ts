import mockAxios from 'axios'
import { getConfig } from './configuration'

jest.mock('axios')

it('can fetch configuration from TMDB', () => {
  const url = 'https://api.themoviedb.org/3/'
  const apiKey = '1234'

  getConfig(apiKey, url)

  expect(mockAxios.get).toHaveBeenNthCalledWith(
    1,
    `${url}/configuration`,
    { params: { api_key: apiKey } }
  )
})