import React from 'react'
import  { Score } from '../../../common/components'

const DetailsHeader = ({ title, language, seasonsCount, episodesCount, poster, backdrop, rating }) => {
  const backdropStyle = {
    backgroundImage: `url(${backdrop})`,
  }
  return (
    <header style={backdropStyle}>
      <h2>{title}</h2>
      <img src={poster} alt={title} />
      <span><Score value={rating} /></span>
      <span>{language}</span>
      <span>{seasonsCount} seasons, {episodesCount} episodes</span>
    </header>
  );
};

export default DetailsHeader;