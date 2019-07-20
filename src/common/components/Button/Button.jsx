import React from 'react';

import styles from './Button.module.css'

const Button = ({ className, type, variant, click, children }) => {
  const classes = [
    styles.Button,
    variant === 'primary' ? styles['Button--primary'] : '',
    variant === 'outlined' ? styles['Button--outlined'] : '',
    className,
  ].join(' ')

  return (
    <button className={classes} type={type || 'button'} onClick={click}>
      {children}
    </button>
  );
};

export default Button;