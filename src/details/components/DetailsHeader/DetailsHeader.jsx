import React from 'react'
import  { Score } from '../../../common/components'

const DetailsHeader = ({ title, language, seasonsCount, episodesCount, backdrop, rating, ...rest }) => {
  const backdropStyle = {
    backgroundImage: `url(${backdrop})`,
  }
  return (
    <header style={backdropStyle} {...rest}>
      <button onClick={() => window.history.back()}>back to results</button>

      <div>
        <h2>{title}</h2>
        <span><Score value={rating} /></span>
      </div>
      <div>
        <span>{language}</span>
        <span>{seasonsCount} seasons, {episodesCount} episodes</span>
      </div>
    </header>
  );
};

export default DetailsHeader;