import React from 'react'
import classes from './DetailsSection.module.css'

const DetailsSection = ({ title, children }) => {
  return (
    <article className={classes.DetailsSection}>
      <h3>{title}</h3>
      {children}
    </article>
  )
}

export default DetailsSection