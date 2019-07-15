import { connect } from 'react-redux'
import { Dispatch } from 'redux';
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

export * from './effects'
