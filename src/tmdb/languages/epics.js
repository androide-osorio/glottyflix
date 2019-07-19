import { of } from 'rxjs';
import { ofType } from 'redux-observable';
import { map, switchMap, catchError } from 'rxjs/operators'

import { fetchLanguages } from './http';
import { actionTypes, fetchLanguagesSuccess, fetchLanguagesFail } from '../actions';

export const fetchLanguagesEpic = actions$ => actions$.pipe(
  ofType(actionTypes.FETCH_LANGUAGES),
  switchMap(_ => fetchLanguages()),
  map(response => response.data),
  map(data => fetchLanguagesSuccess(data)),
  catchError(error => of(fetchLanguagesFail(error))),
)
