import React from 'react';
import { useSelector } from 'react-redux';
import ResultItem from '../ResultItem/ResultItem'
import { selectPosterPath } from '../../../tmdb/store';

const SearchResults = ({ items }: any) => {
  const posterPath = useSelector(selectPosterPath('w185') as any)

  return (
    <ul>
      {items.map((item: any) =>
        <li key={item.id}>
          <ResultItem title={item.original_name} image={`${posterPath}${item.poster_path}`} />
        </li>
      )}
    </ul>
  );
};

export default SearchResults;