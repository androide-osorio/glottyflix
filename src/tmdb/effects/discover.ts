import { from, of } from 'rxjs';
import { ofType, Epic } from 'redux-observable';
import { map, switchMap, catchError } from 'rxjs/operators'

import { discoverTvShows } from '../api';
import { TMDBActionTypes } from './../actions/actionTypes';
import { discoverSuccess, discoverFail } from '../actions/actions';


export const discoverEpic: Epic = actions$ => actions$.pipe(
  ofType(TMDBActionTypes.DISCOVER),
  map(action => action.payload),
  switchMap(payload => from(discoverTvShows({
    params: {
      with_original_language: payload.language
    }
  }))),
  map((response: any) => response.data.results),
  map(data => discoverSuccess(data)),
  catchError(error => of(discoverFail(error))),
)
