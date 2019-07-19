import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchTvShowDetails, selectTvShowWithId } from '../tmdb/store';

const TvShowDetails = ({ match }) => {
  const dispatch = useDispatch()
  const tvShow = useSelector(
    selectTvShowWithId(match.params.id)
  )

  useEffect(() => {
    dispatch(fetchTvShowDetails({ id: match.params.id }))
  })

  return (
    <div>
      <h3>Showing details for TV show with ID {match.params.id}</h3>
      {JSON.stringify(tvShow)}
    </div>
  );
};

export default TvShowDetails;