import mockAxios from 'axios'
import { get, mergeWithDefaultParams } from './requests'

describe('mergeWithDefaultParams()', () => {
  it('merges param object with default one', () => {
    const defaultParams = { params: { foo: 1, bar: 'baz' } }
    const params2 = { params: { key: 'val' } }
    const result = mergeWithDefaultParams(defaultParams, params2)
    const expected = {
      ...params2.params ,
      ...defaultParams.params
    }

    expect(result).toEqual(expected)
  })

  it('keeps default parameters untouched', () => {
    const defaultParams = { params: { foo: 1, bar: 'baz' } }
    const params2 = { params: { foo: 'bla', key: 'val' } }
    const result = mergeWithDefaultParams(defaultParams, params2)
    const expected = {
      ...params2.params ,
      ...defaultParams.params
    }

    expect(result).toEqual(expected)
  })
})

describe('get()', () => {
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

  it('can override default request config', () => {
    config = {
      headers: {'X-Custom-Header': 'blabla'},
    }

    // eslint-disable-next-line no-unused-vars
    const request = get(mockAxios, url, config)
    const expectedConfig = {
      ...config,
      params: defaultParams,
    }

    expect(mockAxios.get)
      .toHaveBeenNthCalledWith(1, url, expectedConfig)
  })

  xit('can merge Query Parameters', () => {
    config = {
      params: { foo: 'baz', num: 4, api_key: 'bla' },
    }

    // eslint-disable-next-line no-unused-vars
    const request = get(mockAxios, url, config)
    const expectedConfig = {
      params: { ...config.params, ...defaultParams },
    }

    expect(mockAxios.get)
      .toHaveBeenNthCalledWith(1, url, expectedConfig)
  })
})
