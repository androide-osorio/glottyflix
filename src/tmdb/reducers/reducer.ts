import { produce } from 'immer'

import { TMDBActionTypes } from '../actions/actionTypes';


export const configReducer = produce((draft, action) => {
  const { type, ...rest } = action
  switch(type) {
    case TMDBActionTypes.FETCH_CONFIG_SUCCESS:
      draft = rest
      break;
  }
})
