import { compose } from 'ramda'
import { from as observableFrom, of } from 'rxjs';
import { ofType } from 'redux-observable';
import { map, switchMap, tap, catchError } from 'rxjs/operators'

import { discoverTvShows } from './http';
import { actionTypes, discoverSuccess, discoverFail } from './actions';

const callDiscoverEndpoint = compose(
  observableFrom,
  discoverTvShows,
)

/**
 * this epic captures DISCOVER actions,
 * transform it into an http request to "/discover",
 * and transforms that response into an appropiate
 * success or response action.
 */
export const discoverEpic = actions$ => actions$.pipe(
  ofType(actionTypes.DISCOVER),
  map(action => action.payload),
  switchMap(payload => {
    const query = {
      with_original_language: payload.filters.language
    }
    return callDiscoverEndpoint({ params: query }).pipe(
      map(res => res.data.results),
      tap(console.log),
      map(list => discoverSuccess({ type: payload.type, results: list})),
      catchError(error => of(discoverFail(error))),
    )
  }),
)
