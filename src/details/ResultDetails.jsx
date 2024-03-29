import React, { useEffect } from 'react'
import { propOr, pathOr, sortBy } from 'ramda'
import { useDispatch } from 'react-redux'

import { useMemoizedSelector } from '../common/hooks'
import { getYear } from '../common/helpers/dates'
import { scale } from '../common/helpers/math'
import Button from '../common/components/Button/Button'

import {
  selectPosterPath,
  selectBackdropPath,
  selectLogoPath,
  selectProfilePath
} from '../tmdb/configuration/selectors'
import { selectLanguageWithCode } from '../tmdb/languages/selectors'
import { selectTvShowWithId } from '../tmdb/tv-shows/selectors'
import { fetchTvShowDetails } from '../tmdb/tv-shows/actions'
import { buildUrlsForIds } from '../tmdb/external-ids';

import DetailsHeader from './components/DetailsHeader/DetailsHeader'
import DetailsSection from './components/DetailsSection/DetailsSection'
import GenreTag from './components/GenreTag/GenreTag'
import ActorItem from './components/ActorItem/ActorItem'
import TrailerItem from './components/TrailerItem/TrailerItem'

import classes from './ResultDetails.module.css';

const ResultDetails = ({ match }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTvShowDetails({ id: match.params.id }))
  }, [dispatch, match.params.id])

  const tvShow = useMemoizedSelector(selectTvShowWithId, match.params.id)
  const posterPath = useMemoizedSelector(selectPosterPath, 'w342')
  const backdropPath = useMemoizedSelector(selectBackdropPath, 'original')
  const logoPath = useMemoizedSelector(selectLogoPath, 'w92')
  const profilePath = useMemoizedSelector(selectProfilePath, 'w185')

  const language = useMemoizedSelector(
    selectLanguageWithCode, propOr('xx', 'original_language', tvShow)
  )

  if (!tvShow) {
    return <p>Please wait...</p>
  }

  const sortedCast = sortBy(propOr(0, 'order'), pathOr([], ['credits', 'cast'], tvShow))
  const urls = buildUrlsForIds(tvShow.external_ids)

  return (
    <section className={classes.ResultDetails}>
      <DetailsHeader
        className={classes.ResultDetails__header}
        title={tvShow.name}
        language={language}
        seasonsCount={tvShow.number_of_seasons}
        episodesCount={tvShow.number_of_episodes}
        backdrop={`${backdropPath}/${tvShow.backdrop_path}`}
        rating={Math.round(scale(tvShow.vote_average, 0, 10, 0, 5))} />

      <aside className={classes.ResultDetails__sidebar}>
        <img src={`${posterPath}/${tvShow.poster_path}`} alt={`${tvShow.name} poster`} className={classes.ResultDetails__poster} />

        <DetailsSection title={"Available in"}>
          {tvShow.networks.map(network => (
            <img key={network.id} src={`${logoPath}/${network.logo_path}`} alt={network.name} />
          )) }
        </DetailsSection>
        <DetailsSection title={"Genres"}>
          {tvShow.genres.map(genre => (
            <GenreTag key={genre.id}>{genre.name}</GenreTag>
          )) }
        </DetailsSection>
        <DetailsSection title={"Social Media"}>
          { Object.entries(urls).map(([key, url]) => (
            <Button key={key} href={url}
              target="_blank"
              variant="primary">
                {key}
            </Button>
          )) }
        </DetailsSection>
      </aside>

      <section className={classes.ResultDetails__content}>
        <DetailsSection title={"Synopsis"}>
          <h4>
            {getYear(tvShow.first_air_date)} - {tvShow.in_production ? 'Present' : getYear(tvShow.last_air_date)}
          </h4>
          <p>{tvShow.overview}</p>
        </DetailsSection>
        <DetailsSection title="Trailers">
          <div className={classes.ResultDetails__trailersList}>
            {tvShow.videos.results.map(video => <TrailerItem {...video} videoId={video.key} />)}
          </div>
        </DetailsSection>
        <DetailsSection title={"Cast"}>
        <div className={classes.ResultDetails__castList}>
          { sortedCast.map(actor => (
            <ActorItem key={actor.id} profilePicture={actor.profile_path ? `${profilePath}/${actor.profile_path}` : null} {...actor} />
          )) }
        </div>
        </DetailsSection>
      </section>
    </section>
  );
};

export default ResultDetails;