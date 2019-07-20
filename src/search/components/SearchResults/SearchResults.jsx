import React from 'react'
import { Link } from 'react-router-dom'

import { useMemoizedSelector } from '../../../common/hooks'
import { selectPosterPath } from '../../../tmdb/store'

import ResultItem from '../ResultItem/ResultItem'

import classes from './SearchResults.module.css'

const SearchResults = ({ results, itemPosterSize }) => {
  const posterUrl = useMemoizedSelector(selectPosterPath, itemPosterSize)

  if (!results) {
    return <p>Please wait...</p>
  }

  return (
    <>
      {results.length > 0 && <h3>found {results.length} TV Shows</h3>}

      <ul className={classes.SearchResults}>
        {results.map((item) =>
          <li className={classes.SearchResults__item} key={item.id}>
            <Link to={`/tv-shows/${item.id}`}>
              <ResultItem
                title={item.original_name}
                image={`${posterUrl}${item.poster_path}`} />
            </Link>
          </li>
        )}
      </ul>
    </>
  );
};

export default SearchResults;