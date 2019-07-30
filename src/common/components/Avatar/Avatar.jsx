import React from 'react'
import { compose, split, map, head, toUpper } from 'ramda'

import classes from './Avatar.module.css';

const getInitials = compose(
  map(toUpper),
  map(head),
  split(/\s/),
)

const Avatar = ({ name, profilePicturePath }) => {
  const initials = getInitials(name)
  return (
    <div className={classes.Avatar}>
      { profilePicturePath
        ? <img src={profilePicturePath} alt={name}/>
        : <p className={classes.Avatar__initials}>{initials}</p>}
    </div>
  )
}

export default Avatar