import React from 'react';
import LanguagesList from '../LanguagesList/LanguagesList'

import styles from './Search.module.css'

const Search = ({ label, placeholder, languages, onChange, onSubmit }) => {
  return (
    <form className={styles.Search}>
      <label htmlFor="queryInput" className={styles.Search__title}>
        I am looking for <span role="img" aria-label='eyes'>👀</span>
        <select className={styles.Search__dropdown} name="type" id="type">
          <option value="tv">TV-Shows</option>
          <option value="movies">Movies</option>
          <option value="all">TV-Shows &amp; Movies</option>
        </select>
      </label>
      <label htmlFor="queryInput" className={styles.Search__title}>
        Spoken in
        <input
          className={styles.Search__input}
          type="search"
          name="language"
          list="languagesList"
          id="queryInput"
          placeholder={placeholder}
          onChange={onChange} />
        <LanguagesList id="languagesList" languages={languages}  onChange={onChange} />
      </label>
      <input className={styles.Search__button} type="submit" value="Search!" onClick={onSubmit} />
      <input className={styles.Search__button} type="submit" value="Surprise me!" onClick={onSubmit} />
    </form>
  );
};

export default Search;