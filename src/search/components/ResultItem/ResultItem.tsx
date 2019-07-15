import React from 'react';

const ResultItem = ({ title, image }: any) => {
  return (
    <div className="ResultItem">
      <img src={image} alt={`${title} poster`}/>
      <h3>{title}</h3>
    </div>
  );
};

export default ResultItem;