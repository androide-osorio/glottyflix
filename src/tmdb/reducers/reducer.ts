import { produce } from 'immer'

import { TMDBActionTypes } from '../actions/actionTypes';


export const configReducer = (state = {}, action: any) => produce(state, (draft: any) => {
  const { type, ...rest } = action
  switch(type) {
    case TMDBActionTypes.FETCH_CONFIG_SUCCESS:
      Object.assign(draft, rest)
      break;
  }
})
