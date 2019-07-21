import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { useMemoizedSelector } from '../common/hooks'
import { discover, selectPosterPath, selectDiscoverResults } from '../tmdb/store'

import ResultItem from './components/ResultItem/ResultItem'
import ResultsSkeleton from './components/ResultsSkeleton/ResultsSkeleton'

import classes from './SearchResults.module.css'

const SearchResults = ({ match }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const discoverAction = discover({
      type: match.params.type,
      filters: { language: match.params.lang }
    })
    dispatch(discoverAction)
  }, [dispatch, match.params.type, match.params.lang])

  const tvShows = useMemoizedSelector(selectDiscoverResults, 'tv')
  const posterUrl = useMemoizedSelector(selectPosterPath, 'w185')

  if (!tvShows) {
    return <ResultsSkeleton />
  }

  return (
    <section className={classes.SearchResults}>
      <h3 className={classes.SearchResults__title}>
        found {tvShows.length} TV Shows in {match.params.lang}
      </h3>

      <ul className={classes.SearchResults__list}>
        {tvShows.map((item) =>
          <li className={classes.SearchResults__item} key={item.id}>
            <Link to={`/tv-shows/${item.id}`}>
              <ResultItem
                title={item.original_name}
                image={`${posterUrl}${item.poster_path}`} />
            </Link>
          </li>
        )}
      </ul>
    </section>
  );
};

export default SearchResults;