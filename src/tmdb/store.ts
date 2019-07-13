import { connect } from 'react-redux'
import { Dispatch } from 'redux';

const mapStateToProps = (state: any) => {
  return {
    config: () => state.config
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
export * from './reducers/reducer'
export * from './effects/epics'
