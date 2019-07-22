import React from 'react'
import  { Score } from '../../../common/components'

import classes from './Detailsheader.module.css'

const DetailsHeader = ({ title, language, seasonsCount, episodesCount, backdrop, rating, className }) => {
  const backdropStyle = {
    backgroundImage: `url(${backdrop})`,
  }
  const rootClasses = [classes.DetailsHeader, className].join(' ')

  return (
    <header style={backdropStyle} className={rootClasses}>
      <button
        className={classes.DetailsHeader__closeButton}
        onClick={() => window.history.back()}>
        back to results
      </button>

      <div className={classes.DetailsHeader__left}>
        <h2>{title}</h2>
        <Score value={rating} />
      </div>
      <div className={classes.DetailsHeader__right}>
        <span>{language}</span>
        <span>{seasonsCount} seasons, {episodesCount} episodes</span>
      </div>
    </header>
  );
};

export default DetailsHeader;