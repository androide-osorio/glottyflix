import React from 'react'

import classes from './ActorItem.module.css'
import Avatar from '../../../common/components/Avatar/Avatar';

const ActorItem = ({ profilePicture, name, character }) => {
  return (
    <figure className={classes.ActorItem}>
      <Avatar name={name} profilePicturePath={profilePicture} />
      <figcaption>
        <h5 className={classes.ActorItem__actorName}>{name}</h5>
        <p className={classes.ActorItem__characterName}>{character}</p>
      </figcaption>
    </figure>
  )
}

export default ActorItem;