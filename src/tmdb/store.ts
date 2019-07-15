import { connect } from 'react-redux'
import { Dispatch } from 'redux';

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

export * from './reducers/config'
export * from './reducers/tvshows'

export * from './effects/epics'
