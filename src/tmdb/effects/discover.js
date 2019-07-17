import { compose } from 'ramda'
import { from as observableFrom, of } from 'rxjs';
import { ofType } from 'redux-observable';
import { map, switchMap, catchError } from 'rxjs/operators'

import { discoverTvShows } from '../api';
import actionTypes from './../actions/actionTypes';
import { discoverSuccess, discoverFail } from '../actions/actions';

const callDiscoverEndpoint = compose(
  observableFrom,
  discoverTvShows,
)

export const discoverEpic = actions$ => actions$.pipe(
  ofType(actionTypes.DISCOVER),
  map(action => action.payload),
  switchMap(payload => callDiscoverEndpoint({
    params: {
      with_original_language: payload.language
    }
  })),
  map(response => response.data.results),
  map(data => discoverSuccess(data)),
  catchError(error => of(discoverFail(error))),
)
