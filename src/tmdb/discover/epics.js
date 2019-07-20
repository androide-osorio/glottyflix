import { compose } from 'ramda'
import { from as observableFrom, of } from 'rxjs';
import { ofType } from 'redux-observable';
import { map, switchMap, catchError } from 'rxjs/operators'

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
      with_original_language: payload.filters.language,
      page: payload.filters.page || 1,
    }
    return callDiscoverEndpoint({ params: query }).pipe(
      map(res => res.data),
      map(({ page, total_pages, results }) => discoverSuccess({
        type: payload.type,
        results, page,
        totalPages: total_pages
      })),
      catchError(error => of(discoverFail(error))),
    )
  }),
)
