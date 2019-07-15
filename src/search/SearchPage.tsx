import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useSearchForm } from './hooks/useForm'
import Search from './components/Search/Search'
import { discover, selectTvShows } from '../tmdb/store';

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
    <div className="SearchPage">
    <h1>The Polyglot Binge-Watcher</h1>
    <Search
      label="I am looking for TV-Shows in "
      placeholder="Language I am learning..."
      languages={langs}
      onChange={handleInputChange}
      onSubmit={handleSubmit} />
    <section>
      {JSON.stringify(tvShows)}
    </section>
  </div>
  );
}

export default SearchPage;