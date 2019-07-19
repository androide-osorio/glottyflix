import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import ResultItem from '../ResultItem/ResultItem'
import { selectTvShows, selectPosterPath } from '../../../tmdb/store'

import classes from './SearchResults.module.css'

const SearchResults = () => {
  const tvShows = useSelector(selectTvShows)
  const posterPath = useSelector(selectPosterPath('w185'))

  return (
    <>
      {tvShows.length > 0 && <h3>found {tvShows.length} TV Shows</h3>}

      <ul className={classes.SearchResults}>
        {tvShows.map((item) =>
          <li className={classes.SearchResults__item} key={item.id}>
            <Link to={`/tv-shows/${item.id}`}>
              <ResultItem
                title={item.original_name}
                image={`${posterPath}${item.poster_path}`} />
            </Link>
          </li>
        )}
      </ul>
    </>
  );
};

export default SearchResults;