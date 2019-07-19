import mockAxios from 'axios'
import { get } from './requests'

describe('Http GET', () => {
  const url = 'foo.bar'
  let defaultParams = { api_key: 'complicatedgiberrish' }
  let config

  beforeEach(() => {
    jest.spyOn(mockAxios, 'get').mockResolvedValueOnce({})
    mockAxios.defaults.params = defaultParams
  })

  afterEach(() => {
    jest.spyOn(mockAxios, 'get').mockClear()
  })

  it('can perform a GET request', () => {
    config = {}

    // eslint-disable-next-line no-unused-vars
    const request = get(mockAxios, url, config)
    const expectedConfig = { params: defaultParams }

    expect(mockAxios.get)
      .toHaveBeenNthCalledWith(1, url, expectedConfig)
  })

  it('can send GET request with additional parameters', () => {
    config = {
      headers: {'X-Custom-Header': 'blabla'},
      params: { foo: 'baz', num: 4 },
    }

    // eslint-disable-next-line no-unused-vars
    const request = get(mockAxios, url, config)
    const expectedConfig = {
      ...config,
      params: {...defaultParams, ...config.params },
    }

    expect(mockAxios.get)
      .toHaveBeenNthCalledWith(1, url, expectedConfig)
  })
})
