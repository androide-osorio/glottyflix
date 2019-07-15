import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useSearchForm } from './hooks/useForm'
import { discover, selectTvShows } from '../tmdb/store';

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
  const tvShows = useSelector(selectTvShows)

  const callDiscover = (inputs: any) => {
    const { language } = inputs
    const langObject = langs.find(lang => lang.name === language)

    if (langObject) {
      dispatch(discover({ language: langObject.code }))
    }
  }

  const {inputs, handleInputChange, handleSubmit} = useSearchForm(callDiscover);

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
      {tvShows.length > 0 && <h3>found {tvShows.length} TV Shows</h3>}
      <SearchResults items={tvShows} />
    </section>
  </div>
  );
}

export default SearchPage;