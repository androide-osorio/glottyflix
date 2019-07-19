import { connect } from 'react-redux'
import { combineEpics } from 'redux-observable'

// reducers
import { configReducer } from './configuration/reducer'
import { tvShowsReducer } from './tvshows/reducer'
import { discoverReducer } from './discover/reducer'
import { languagesReducer } from './languages/reducer'

import * as configSelectors from './configuration/selectors'
import * as tvShowsSelectors from './tvshows/selectors'
import * as discoverSelectors from './discover/selectors'
import * as languagesSelectors from './languages/selectors'

import { fetchConfigEpic } from './configuration/epics'
import { fetchTvShowDetailsEpic } from './tvshows/epics'
import { discoverEpic } from './discover/epics'
import { fetchLanguagesEpic } from './languages/epics'

const mapStateToProps = state => {
  return {
    config: configSelectors.selectConfig,
    tvShows: tvShowsSelectors.selectTvShows,
    discover: discoverSelectors.selectDiscover,
    languages: languagesSelectors.selectLanguages,
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
  discover: discoverReducer,
  languages: languagesReducer,
}

export const tmdbEpic = combineEpics(
  fetchConfigEpic,
  discoverEpic,
  fetchTvShowDetailsEpic,
  fetchLanguagesEpic,
)

// exports
export * from './configuration/actions'
export * from './tvshows/actions'
export * from './discover/actions'
export * from './languages/actions'

export * from './configuration/selectors'
export * from './tvshows/selectors'
export * from './discover/selectors'
export * from './languages/selectors'
