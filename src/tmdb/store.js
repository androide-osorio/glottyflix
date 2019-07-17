import { connect } from 'react-redux'

// reducers
import { configReducer } from './reducers/config';
import { tvShowsReducer } from './reducers/tvshows';

const mapStateToProps = state => {
  return {
    config: () => state.config,
    tvShows: () => state.tvShows,
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export const connectToTMDB = connect(
  mapStateToProps,
  mapDispatchToProps
)

export const tmdbReducersMap = {
  config: configReducer,
  tvshows: tvShowsReducer,
}

export * from './actions/actions'
export * from './selectors'
export * from './effects'
