import { AxiosResponse } from 'axios';
import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { from, of, Observable } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators'

import { getConfig } from './../configuration';
import { TMDBActionTypes } from './../actions/actionTypes';
import { fetchConfigSuccess, fetchConfigFail } from '../actions/actions';

const  { REACT_APP_TMDB_API_KEY } = process.env

export const fetchConfigEpic = (actions$: Observable<Action>) => actions$.pipe(
  ofType(TMDBActionTypes.FETCH_CONFIG),
  exhaustMap(_ => from(getConfig(REACT_APP_TMDB_API_KEY as string))),
  map((response: AxiosResponse<any>) => response.data),
  tap(console.log),
  map(data => fetchConfigSuccess(data)),
  catchError(error => of(fetchConfigFail(error))),
)
