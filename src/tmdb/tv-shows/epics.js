import { of } from 'rxjs';
import { ofType } from 'redux-observable';
import { map, switchMap, catchError } from 'rxjs/operators'

import { fetchTvDetails } from './http';
import { actionTypes, fetchTvShowDetailsSuccess, fetchTvShowDetailsFail } from './actions';

export const fetchTvShowDetailsEpic = actions$ => actions$.pipe(
  ofType(actionTypes.FETCH_TV_DETAILS),
  map(action => action.payload),
  map(payload => payload.id),
  map(tvId => fetchTvDetails(tvId)),
  switchMap(callTvDetails => callTvDetails({
    params: {
      append_to_response: 'videos,credits,external_ids'
    }
  })),
  map(response => response.data),
  map(data => fetchTvShowDetailsSuccess(data)),
  catchError(error => of(fetchTvShowDetailsFail(error))),
)
