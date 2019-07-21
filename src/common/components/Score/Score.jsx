import React from 'react'

import HeartIcon from '../Icons/Heart'
import classes from './Score.module.css'

const Score = ({ value }) => {
  const ratingBase = 5
  const baseColor = '#ECC129'
  const controlList = Array
    .from({ length: ratingBase }, (_, i) => i + 1 <= value)
    .map(scoreValActive => ({
      width: '1.5rem',
      height: '1.5rem',
      [scoreValActive ? 'color' : 'stroke']: baseColor,
      ...(scoreValActive ? { strokeWidth: 2 } : {}),
    }))

  return (
    <ul className={classes.Score}>
      {controlList.map((itemProps, i) => (
        <li key={`Score__icon-${i}`} className={classes.Score__icon}>
          <HeartIcon {...itemProps} />
        </li>
      ))}
    </ul>
  )
}

export default Score
