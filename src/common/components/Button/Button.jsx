import React from 'react';

import styles from './Button.module.css'

const Button = ({ className, href, target, type, variant, click, children }) => {
  const classes = [
    styles.Button,
    variant === 'primary' ? styles['Button--primary'] : '',
    variant === 'outlined' ? styles['Button--outlined'] : '',
    className,
  ].join(' ')

  if (href) {
    return <a href={href} target={target} className={classes}>{children}</a>
  }

  return (
    <button className={classes} type={type || 'button'} onClick={click}>
      {children}
    </button>
  );
};

export default Button;