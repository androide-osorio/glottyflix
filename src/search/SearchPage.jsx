import React from 'react'
import { useDispatch } from 'react-redux'

import { useSearchForm } from './hooks/useForm'
import { discover } from '../tmdb/store';

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

  const callDiscover = inputs => {
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
      <SearchResults />
    </section>
  </div>
  );
}

export default SearchPage;