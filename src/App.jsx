import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchConfig } from './tmdb/store';

// stylesheets and assets
import './App.css';
import SearchPage from './search/SearchPage';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(fetchConfig({}))
    dispatch(fetchConfig({}))
  })

  return (
    <div className="App">
      <SearchPage />
    </div>
  )
}

export default App;
