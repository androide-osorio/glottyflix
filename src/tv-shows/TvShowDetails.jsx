import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DateTime } from 'luxon'

import { fetchTvShowDetails, selectTvShowWithId, selectPosterPath, selectBackdropPath, selectLogoPath } from '../tmdb/store';

import TvShowHeader from './components/TvShowHeader/TvShowHeader'
import TvShowSection from './components/TvShowSection/TvShowSection';

const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

const TvShowDetails = ({ match }) => {
  const dispatch = useDispatch()
  const tvShow = useSelector(selectTvShowWithId(match.params.id))
  const posterPath = useSelector(selectPosterPath('w185'))
  const backdropPath = useSelector(selectBackdropPath('original'))
  const logoPath = useSelector(selectLogoPath('w92'))


  useEffect(() => {
    dispatch(fetchTvShowDetails({ id: match.params.id }))
  })

  if (!tvShow) {
    return <p>Please wait...</p>
  }

  console.log(tvShow, posterPath, backdropPath)

  return (
    <div>
      <TvShowHeader
        title={tvShow.name}
        language={tvShow.original_language}
        seasonsCount={tvShow.number_of_seasons}
        episodesCount={tvShow.number_of_episodes}
        poster={`${posterPath}/${tvShow.poster_path}`}
        backdrop={`${backdropPath}/${tvShow.backdrop_path}`}
        rating={Math.round(map(tvShow.vote_average, 0, 10, 0, 5))} />

      <section>
        <TvShowSection title={"Available in"}>
          {tvShow.networks.map(network => (
            <img key={network.id} src={`${logoPath}/${network.logo_path}`} alt={network.name} />
          )) }
        </TvShowSection>
        <TvShowSection title={"Synopsis"}>
          <h4>{DateTime.fromISO(tvShow.first_air_date).year} - {tvShow.in_production ? 'Present' : DateTime.fromISO(tvShow.last_air_date).year}</h4>
          <p>{tvShow.overview}</p>
        </TvShowSection>
        <TvShowSection title={"Genres"}>
          {tvShow.genres.map(genre => (
            <span key={genre.id}>{genre.name}</span>
          )) }
        </TvShowSection>
      </section>
    </div>
  );
};

export default TvShowDetails;