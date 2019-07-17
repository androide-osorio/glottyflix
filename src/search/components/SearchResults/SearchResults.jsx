import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import ResultItem from '../ResultItem/ResultItem'
import { selectPosterPath } from '../../../tmdb/store'

import classes from './SearchResults.module.css'

const SearchResults = ({ items }) => {
  const posterPath = useSelector(selectPosterPath('w185'))

  return (
    <ul className={classes.SearchResults}>
      {items.map((item) =>
        <li className={classes.SearchResults__item} key={item.id}>
          <Link to={`/tv-shows/${item.id}`}>
            <ResultItem
              title={item.original_name}
              image={`${posterPath}${item.poster_path}`} />
          </Link>
        </li>
      )}
    </ul>
  );
};

export default SearchResults;