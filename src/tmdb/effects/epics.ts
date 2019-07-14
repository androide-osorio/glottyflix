import { from, of } from 'rxjs';
import { ofType, Epic } from 'redux-observable';
import { map, switchMap, catchError } from 'rxjs/operators'

import { getConfig } from './../configuration';
import { TMDBActionTypes } from './../actions/actionTypes';
import { fetchConfigSuccess, fetchConfigFail } from '../actions/actions';

const apiKey = process.env.REACT_APP_TMDB_API_KEY as string

export const fetchConfigEpic: Epic = actions$ => actions$.pipe(
  ofType(TMDBActionTypes.FETCH_CONFIG),
  switchMap(_ => from(getConfig(apiKey))),
  map(response => response.data),
  map(data => fetchConfigSuccess(data)),
  catchError(error => of(fetchConfigFail(error))),
)
