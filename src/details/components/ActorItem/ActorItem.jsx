import React from 'react'

import classes from './ActorItem.module.css'

const ActorItem = ({ profilePicture, name, character }) => {
  return (
    <figure className={classes.ActorItem}>
      <div className={classes.ActorItem__profilePicture}>
        <img src={profilePicture} alt={name}/>
      </div>
      <figcaption>
        <h5 className={classes.ActorItem__actorName}>{name}</h5>
        <p className={classes.ActorItem__characterName}>{character}</p>
      </figcaption>
    </figure>
  )
}

export default ActorItem;