import React from 'react';

const TvShowSection = ({ title, children }) => {
  return (
    <article>
      <h3>{title}</h3>
      {children}
    </article>
  );
};

export default TvShowSection;