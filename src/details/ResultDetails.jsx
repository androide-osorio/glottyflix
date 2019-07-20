import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DateTime } from 'luxon'

import { fetchTvShowDetails, selectTvShowWithId, selectPosterPath, selectBackdropPath, selectLogoPath, selectProfilePath } from '../tmdb/store';

import DetailsHeader from './components/DetailsHeader/DetailsHeader'
import DetailsSection from './components/DetailsSection/DetailsSection';
import GenreTag from './components/GenreTag/GenreTag';
import ActorItem from './components/ActorItem/ActorItem';
import Button from '../common/components/Button/Button';

const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

const urls = {
  imdb: 'https://www.imdb.com/title/',
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',
  twitter: 'https://www.twitter.com/',
}

const ResultDetails = ({ match }) => {
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

  return (
    <div>
      <button onClick={() => window.history.back()}>back to results</button>
      <DetailsHeader
        title={tvShow.name}
        language={tvShow.original_language}
        seasonsCount={tvShow.number_of_seasons}
        episodesCount={tvShow.number_of_episodes}
        poster={`${posterPath}/${tvShow.poster_path}`}
        backdrop={`${backdropPath}/${tvShow.backdrop_path}`}
        rating={Math.round(map(tvShow.vote_average, 0, 10, 0, 5))} />

      <section>
        <DetailsSection title={"Available in"}>
          {tvShow.networks.map(network => (
            <img key={network.id} src={`${logoPath}/${network.logo_path}`} alt={network.name} />
          )) }
        </DetailsSection>
        <DetailsSection title={"Synopsis"}>
          <h4>{DateTime.fromISO(tvShow.first_air_date).year} - {tvShow.in_production ? 'Present' : DateTime.fromISO(tvShow.last_air_date).year}</h4>
          <p>{tvShow.overview}</p>
        </DetailsSection>
        <DetailsSection title={"Genres"}>
          {tvShow.genres.map(genre => (
            <GenreTag key={genre.id}>{genre.name}</GenreTag>
          )) }
        </DetailsSection>
        <DetailsSection title={"Cast"}>
          {tvShow.credits.cast.map(actor => (
            <ActorItem profilePicture={`${profilePath}/${actor.profile_path}`} {...actor} />
          )) }
        </DetailsSection>
        <DetailsSection title={"Social Media"}>
          {Object.entries(tvShow.external_ids).filter(([, idValue]) => idValue).map(([idKey, idValue]) => {
            const mediaName = idKey.replace('_id', '')
            const mediaBaseUrl = urls[mediaName]

            return <Button click={() => window.open(`${mediaBaseUrl}${idValue}`, '_blank')}>{mediaName}</Button>
          }) }
        </DetailsSection>
      </section>
    </div>
  );
};

export default ResultDetails;