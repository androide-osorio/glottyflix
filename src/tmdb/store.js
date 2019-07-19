import { connect } from 'react-redux'
import { combineEpics } from 'redux-observable'

// reducers
import { configReducer } from './configuration/reducer'
import { tvShowsReducer } from './tv-shows/reducer'
import { discoverReducer } from './discover/reducer'
import { languagesReducer } from './languages/reducer'

import * as configSelectors from './configuration/selectors'
import * as tvShowsSelectors from './tv-shows/selectors'
import * as discoverSelectors from './discover/selectors'
import * as languagesSelectors from './languages/selectors'

import { fetchConfigEpic } from './configuration/epics'
import { fetchTvShowDetailsEpic } from './tv-shows/epics'
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
export * from './tv-shows/actions'
export * from './discover/actions'
export * from './languages/actions'

export * from './configuration/selectors'
export * from './tv-shows/selectors'
export * from './discover/selectors'
export * from './languages/selectors'
