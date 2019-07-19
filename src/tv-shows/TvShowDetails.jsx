import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchTvShowDetails, selectTvShowWithId, selectPosterPath, selectBackdropPath } from '../tmdb/store';

import TvShowHeader from './components/TvShowHeader/TvShowHeader'

const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

const TvShowDetails = ({ match }) => {
  const dispatch = useDispatch()
  const tvShow = useSelector(selectTvShowWithId(match.params.id))
  const posterPath = useSelector(selectPosterPath('w185'))
  const backdropPath = useSelector(selectBackdropPath('original'))

  useEffect(() => {
    dispatch(fetchTvShowDetails({ id: match.params.id }))
  })

  if (!tvShow) {
    return <p>Please wait...</p>
  }

  console.log(tvShow, posterPath, backdropPath)

  return (
    <div>
      <h3>Showing details for TV show with ID {match.params.id}</h3>
      <TvShowHeader
        title={tvShow.name}
        poster={`${posterPath}/${tvShow.poster_path}`}
        backdrop={`${backdropPath}/${tvShow.backdrop_path}`}
        rating={Math.round(map(tvShow.popularity, 0, 100, 0, 5))} />
      {JSON.stringify(tvShow)}
    </div>
  );
};

export default TvShowDetails;