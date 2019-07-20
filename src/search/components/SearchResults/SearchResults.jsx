import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import ResultItem from '../ResultItem/ResultItem'
import { selectPosterPath } from '../../../tmdb/store'

import classes from './SearchResults.module.css'

const SearchResults = ({ results, itemPosterSize }) => {
  const selectBasePoster = useMemo(() => selectPosterPath, [])
  const posterUrl = useSelector(state => selectBasePoster(state, itemPosterSize))

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