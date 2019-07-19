import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DateTime } from 'luxon'

import { fetchTvShowDetails, selectTvShowWithId, selectPosterPath, selectBackdropPath, selectLogoPath, selectProfilePath } from '../tmdb/store';

import TvShowHeader from './components/TvShowHeader/TvShowHeader'
import TvShowSection from './components/TvShowSection/TvShowSection';
import GenreTag from './components/GenreTag/GenreTag';

const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

const urls = {
  imdb: 'https://www.imdb.com/title/',
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',
  twitter: 'https://www.twitter.com/',
}

const TvShowDetails = ({ match }) => {
  const dispatch = useDispatch()
  const tvShow = useSelector(selectTvShowWithId(match.params.id))
  const posterPath = useSelector(selectPosterPath('w185'))
  const backdropPath = useSelector(selectBackdropPath('original'))
  const logoPath = useSelector(selectLogoPath('w92'))
  const profilePath = useSelector(selectProfilePath('w185'))


  useEffect(() => {
    dispatch(fetchTvShowDetails({ id: match.params.id }))
  })

  if (!tvShow) {
    return <p>Please wait...</p>
  }

  console.log(tvShow, posterPath, backdropPath)

  return (
    <div>
      <button onClick={() => window.history.back()}>back to results</button>
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
            <GenreTag key={genre.id}>{genre.name}</GenreTag>
          )) }
        </TvShowSection>
        <TvShowSection title={"Cast"}>
          {tvShow.credits.cast.map(actor => (
            <div key={actor.id}>
              <img src={`${profilePath}/${actor.profile_path}`} alt={actor.name}/>
              <h5>{actor.name}</h5>
              <p>{actor.character}</p>
            </div>
          )) }
        </TvShowSection>
        <TvShowSection title={"Social Media"}>

          {Object.entries(tvShow.external_ids).filter(([, idValue]) => idValue).map(([idKey, idValue]) => {
            const mediaName = idKey.replace('_id', '')
            const mediaBaseUrl = urls[mediaName]

            return <button href={`${mediaBaseUrl}/${idValue}`}>{mediaName}</button>
          }) }
        </TvShowSection>
      </section>
    </div>
  );
};

export default TvShowDetails;