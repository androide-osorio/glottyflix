import { from, of } from 'rxjs';
import { ofType, Epic } from 'redux-observable';
import { map, switchMap, catchError } from 'rxjs/operators'

import { getConfig } from '../api';
import { TMDBActionTypes } from './../actions/actionTypes';
import { fetchConfigSuccess, fetchConfigFail } from '../actions/actions';

export const fetchConfigEpic: Epic = actions$ => actions$.pipe(
  ofType(TMDBActionTypes.FETCH_CONFIG),
  switchMap(_ => from(getConfig({}))),
  map((response: any) => response.data),
  map(data => fetchConfigSuccess(data)),
  catchError(error => {
    console.log(error)
    return of(fetchConfigFail(error))
  }),
)
