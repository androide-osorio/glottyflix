import React from 'react'
import classes from './GenreTag.module.css'

const GenreTag = ({ children }) => {
  return (
    <span className={classes.GenreTag}>{ children }</span>
  );
};

export default GenreTag;