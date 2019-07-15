import { connect } from 'react-redux'
import { Dispatch } from 'redux';
import { curry } from 'ramda';

import { configReducer } from './reducers/config';
import { tvShowsReducer } from './reducers/tvshows';

const mapStateToProps = (state: any) => {
  return {
    config: () => state.config,
    tvShows: () => state.tvShows,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
  }
}

export const connectToConfig = connect(
  mapStateToProps,
  mapDispatchToProps
)

export * from './actions/actions'

export const tmdbReducersMap = {
  config: configReducer,
  tvshows: tvShowsReducer,
}

export const selectPosterPath = curry((size: string, state: any, ) => {
  console.log(state)
  const { images } = state.config
  if (!images) {
    return '';
  }
  const w = images.poster_sizes
    ? images.poster_sizes.find((s: string) => s === size)
    : 'original'

  return `${images.secure_base_url}${w}/`
})
export const selectTvShows = (state: any) => state.tvshows.items

export * from './effects'
