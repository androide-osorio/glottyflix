import React from 'react';

const ActorItem = ({ profilePicture, name, character }) => {
  return (
    <div>
      <img src={profilePicture} alt={name}/>
      <h5>{name}</h5>
      <p>{character}</p>
    </div>
  )
}

export default ActorItem;