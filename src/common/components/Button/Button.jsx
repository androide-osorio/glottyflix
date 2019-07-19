import React from 'react';

const Button = ({ type, variant, click, children }) => {
  return (
    <button type={type || 'button'} onClick={click}>{children}</button>
  );
};

export default Button;