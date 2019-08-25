import { __ } from 'ramda';
import compose from 'ramda/es/compose';
import curry from 'ramda/es/curry';
import has from 'ramda/es/has';
import head from 'ramda/es/head';
import last from 'ramda/es/last';
import lensPath from 'ramda/es/lensPath';
import over from 'ramda/es/over';
import replace from 'ramda/es/replace';

import { externalIdsUrls } from './constants';

export const buildUrl = (id, baseUrl) => baseUrl.replace(':id', id)

export const buildExternalIds = curry((baseUrls, ids) => {
  const idKeyLens = lensPath([0])
  const normalizeKey = over(idKeyLens, replace('_id', ''))
  const urlExists = compose(has(__, baseUrls), head)

  const urlEntries = Object.entries(ids)
    .map(normalizeKey)
    .filter(last)
    .filter(urlExists)
    .map(([key, val]) => [key, buildUrl(val, baseUrls[key]), val])

  return Object.fromEntries(urlEntries)
})

export const buildUrlsForIds = buildExternalIds(externalIdsUrls)
/*
ids = {
  facebook_id: '123456',
  twitter_id: 'blabla'
}
*/
