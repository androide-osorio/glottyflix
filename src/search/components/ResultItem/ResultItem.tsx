import React from 'react';
import classes from './ResultItem.module.css'

const ResultItem = ({ title, image }: any) => {
  return (
    <div className={classes.ResultItem}>
      <img src={image} alt={`${title} poster`}/>
      <h3 className={classes.ResultItem__title}>{title}</h3>
    </div>
  );
};

export default ResultItem;