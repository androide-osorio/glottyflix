import React, { useState } from 'react';

import classes from './ResultItem.module.css'

const ResultItem = ({ title, image }) => {
  return (
    <figure className={classes.ResultItem}>
      <img src={image} alt={`${title} poster`}/>
      <figcaption className={classes.ResultItem__caption}>
        <h3 className={classes.ResultItem__title}>{title}</h3>
      </figcaption>
    </figure>
  );
};

ResultItem.Skeleton = () => {
  return (
    <div className={classes.ResultItemSkeleton}>
      <div className={classes.ResultItemSkeleton__title}></div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default ResultItem;