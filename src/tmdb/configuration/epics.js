import { from, of } from 'rxjs';
import { ofType } from 'redux-observable';
import { map, switchMap, catchError } from 'rxjs/operators'

import { getConfig } from './http'
import {
  actionTypes,
  fetchConfigSuccess,
  fetchConfigFail
} from './actions'

/**
 * this epic captures FETCH_CONFIG actions,
 * transform it into an http request to "/configuration",
 * and transforms that response into an appropiate
 * success or response action.
 */
export const fetchConfigEpic = actions$ => actions$.pipe(
  ofType(actionTypes.FETCH_CONFIG),
  switchMap(_ => from(getConfig({}))),
  map(response => response.data),
  map(data => fetchConfigSuccess(data)),
  catchError(error => of(fetchConfigFail(error))),
)
