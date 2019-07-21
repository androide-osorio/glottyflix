import React from 'react'

// import ResultItemSkeleton from './components/ResultItemSkeleton/ResultItemSkeleton'

import classes from './ResultsSkeleton.module.css'
import ResultItem from '../ResultItem/ResultItem';

const ResultsSkeleton = () => {
  const dummyList = Array.from({ length: 10 }, (_, i) => i)
  return (
    <div className={classes.ResultsSkeleton}>
      <h3 className={classes.ResultsSkeleton__title}>Searching for TV-Shows</h3>

      <div className={classes.ResultsSkeleton__list}>
        {dummyList.map((item) => <ResultItem.Skeleton />)}
      </div>
    </div>
  );
};

export default ResultsSkeleton;