import React from 'react'
import { useDispatch } from 'react-redux'

import { useForm, useMemoizedSelector } from '../common/hooks'

import { discover, selectDiscoverResults, selectLanguagesList } from '../tmdb/store'

import Search from './components/Search/Search'
import SearchResults from './components/SearchResults/SearchResults'

import classes from './SearchPage.module.css'

function SearchPage() {
  const dispatch = useDispatch()
  const tvShows = useMemoizedSelector(selectDiscoverResults, 'tv')
  const languages = useMemoizedSelector(selectLanguagesList)

  const callDiscover = inputs => {
    const { language } = inputs
    const langObject = languages
      .find(lang => lang.english_name === language)
    console.log(inputs)

    if (langObject) {
      dispatch(discover({ type: 'tv', filters: { language: langObject.iso_639_1 } }))
    }
  }

  // eslint-disable-next-line no-unused-vars
  const {inputs, handleInputChange, handleSubmit} = useForm(callDiscover);

  return (
    <div className={classes.SearchPage}>
    <h1 className={classes.SearchPage__title}>The Polyglot<br />Binge-Watcher</h1>
    <Search
      label="I am looking for TV-Shows in "
      placeholder="Language I am learning..."
      languages={languages}
      onChange={handleInputChange}
      onSubmit={handleSubmit} />
    <section>
      <SearchResults results={tvShows} itemPosterSize="w185" />
    </section>
  </div>
  );
}

export default SearchPage;