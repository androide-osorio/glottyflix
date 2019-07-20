import React from 'react';

import styles from './SearchResultsSkeleton.module.css'

const SearchResultsSkeleton = ({ match }) => {
  const mockList = Array.from({ length: 20 }, (_, i) => i)

  return (
    <div className={styles.SearchResultsSkeleton}>
      <h3 className={styles.SearchResultsSkeleton__title}>
        <span role="img" aria-label="search">🔍</span> Searching for TV Shows in {match.params.lang}
      </h3>

      <ul className={styles.SearchResultsSkeleton__results}>
        {mockList.map((item) =>
          <li className={styles.SearchResultsSkeleton__item} key={item}>
            <span>Future result here</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SearchResultsSkeleton;