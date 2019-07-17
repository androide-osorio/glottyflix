import { from, of } from 'rxjs';
import { ofType } from 'redux-observable';
import { map, switchMap, catchError } from 'rxjs/operators'

import { getConfig } from '../api';
import actionTypes from './../actions/actionTypes';
import { fetchConfigSuccess, fetchConfigFail } from '../actions/actions';

export const fetchConfigEpic = actions$ => actions$.pipe(
  ofType(actionTypes.FETCH_CONFIG),
  switchMap(_ => from(getConfig({}))),
  map(response => response.data),
  map(data => fetchConfigSuccess(data)),
  catchError(error => of(fetchConfigFail(error))),
)
