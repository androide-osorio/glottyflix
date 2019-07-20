import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { fetchConfig, fetchLanguages } from './tmdb/store';

// external components
import SearchPage from './search/SearchPage';
import { ResultDetails } from './details';

// stylesheets and assets
import styles from './App.module.css';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchConfig({}))
    dispatch(fetchLanguages({}))
  })

  return (
    <Router>
      <div className={styles.App}>
        <Switch>
          <Route path="/" exact component={SearchPage} />
          <Route path="/tv-shows/:id" component={ResultDetails} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
