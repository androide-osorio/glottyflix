import React from 'react'
import styles from './TrailerItem.module.css'

const TrailerItem = ({ videoId, name, type }) => {
  return (
    <figure className={styles.TrailerItem}>
      <a href={`https://youtu.be/${videoId}`} target="_blank" rel="noopener noreferrer">
        <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt={name} />
      </a>
      <figcaption>
        <h4>{name}</h4>
        <small>{type}</small>
      </figcaption>
    </figure>
  )
}

export default TrailerItem