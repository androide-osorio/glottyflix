import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux'

import { useForm, useMemoizedSelector } from '../common/hooks'

import { discover, selectDiscoverResults } from '../tmdb/store'

import Search from './components/Search/Search'
import SearchResults from './components/SearchResults/SearchResults'

import classes from './SearchPage.module.css'

const langs = [
  { code: 'en', name: '🇺🇸 English' },
  { code: 'es', name: '🇪🇸 Spanish' },
  { code: 'fr', name: '🇫🇷 French' },
  { code: 'de', name: '🇩🇪 German' },
]

function SearchPage() {
  const dispatch = useDispatch()
  const tvShows = useMemoizedSelector(selectDiscoverResults, 'tv')

  const callDiscover = inputs => {
    const { language } = inputs
    const langObject = langs.find(lang => lang.name === language)

    if (langObject) {
      dispatch(discover({ type: 'tv', filters: { language: langObject.code } }))
    }
  }

  const {inputs, handleInputChange, handleSubmit} = useForm(callDiscover);

  return (
    <div className={classes.SearchPage}>
    <h1 className={classes.SearchPage__title}>The Polyglot<br />Binge-Watcher</h1>
    <Search
      label="I am looking for TV-Shows in "
      placeholder="Language I am learning..."
      languages={langs}
      onChange={handleInputChange}
      onSubmit={handleSubmit} />
    <section>
      <SearchResults results={tvShows} itemPosterSize="w185" />
    </section>
  </div>
  );
}

export default SearchPage;