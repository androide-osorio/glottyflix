import replace from 'ramda/es/replace';
import sortWith from 'ramda/es/sortWith';
import lensPath from 'ramda/es/lensPath';
import pathOr from 'ramda/es/pathOr';
import tail from 'ramda/es/tail';
import has from 'ramda/es/has';
import descend from 'ramda/es/descend';
import set from 'ramda/es/set';
import __ from 'ramda/es/__';
import join from 'ramda/es/join';

import { externalIdsUrls } from '../../tmdb/constants/external-ids'

export const createObjectPropertySorter = (path) => sortWith([
  descend(pathOr(0, path))
])

export const generateExternalIdPaths = curry((externalIds, urls) => {
  const externalIdKeyLens = lensPath([0])
  const normalizeIdKey = set(externalIdKeyLens, replace('_id', ''))
  const urlExists = has(__, urls);

  return Object
    .entries(externalIds)
    .map(normalizeIdKey)
    .filter(tail)
    .filter(urlExists)
    .map(join(''))
})

export const getExternalLinks = generateExternalIdPaths(externalIdsUrls)
