import { produce } from 'immer'

import { TMDBActionTypes } from '../actions/actionTypes';


export const configReducer = (state = {}, action: any) => produce(state, draft => {
  const { type, ...rest } = action
  switch(type) {
    case TMDBActionTypes.FETCH_CONFIG_SUCCESS:
      draft = rest
      break;
  }
})
