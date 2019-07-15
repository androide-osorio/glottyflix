import mockAxios from 'axios'
import { getConfig } from './configuration'

it('can fetch configuration from TMDB', () => {
  jest.spyOn(mockAxios, 'get').mockResolvedValueOnce({})

  const url = `${process.env.REACT_APP_TMDB_API_URL}/configuration`
  const apiKey = `${process.env.REACT_APP_TMDB_API_KEY}`

  getConfig(apiKey)

  expect(mockAxios.get).toHaveBeenNthCalledWith(
    1,
    url,
    { params: { api_key: apiKey } },
  )
})