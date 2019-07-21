import React from 'react'

import { useForm, useMemoizedSelector } from '../common/hooks'

import { selectLanguagesList } from '../tmdb/store'

import Search from './components/Search/Search'

import classes from './SearchPage.module.css'

function SearchPage({ history }) {
  const languages = useMemoizedSelector(selectLanguagesList)

  const callDiscover = inputs => {
    const { language } = inputs
    const langObject = languages
      .find(lang => lang.english_name === language)

    if (langObject) {
      history.push(`/search/tv/${langObject.iso_639_1}`)
    }
  }

  // eslint-disable-next-line no-unused-vars
  const {inputs, handleInputChange, handleSubmit} = useForm(callDiscover);

  return (
    <div className={classes.SearchPage}>
      <h1 className={classes.SearchPage__title}>The Polyglot<br />Binge-Watcher</h1>
      <Search
        languages={languages}
        onChange={handleInputChange}
        onSubmit={handleSubmit} />
    </div>
  );
}

export default SearchPage;