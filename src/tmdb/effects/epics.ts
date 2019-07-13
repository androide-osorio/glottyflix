import { AxiosResponse } from 'axios';
import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators'

import { getConfig } from './../configuration';
import { TMDBActionTypes } from './../actions/actionTypes';
import { fetchConfigSuccess, fetchConfigFail } from '../actions/actions';

const  { REACT_APP_TMDB_API_KEY } = process.env

export const fetchConfigEpic = actions$ => actions$.pipe(
  ofType(TMDBActionTypes.FETCH_CONFIG),
  exhaustMap(_ => from(getConfig(REACT_APP_TMDB_API_KEY))),
  map((response: AxiosResponse<any>) => response.data),
  map(data => fetchConfigSuccess(data)),
  catchError(error => of(fetchConfigFail(error))),
)
