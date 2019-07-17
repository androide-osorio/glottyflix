import React from 'react';

const TvShowDetails = ({ match }) => {
  return (
    <div>
      <h3>Showing details for TV show with ID {match.params.id}</h3>
    </div>
  );
};

export default TvShowDetails;