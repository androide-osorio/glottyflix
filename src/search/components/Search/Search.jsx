import React from 'react';
import LanguagesList from '../LanguagesList/LanguagesList'

import classes from './Search.module.css'

const Search = ({ label, placeholder, languages, onChange, onSubmit }) => {
  return (
    <form className={classes.Search}>
      <label htmlFor="queryInput">
        { label }
        <input
          className={classes.Search__input}
          type="search"
          name="language"
          list="languagesList"
          id="queryInput"
          placeholder={placeholder}
          onChange={onChange} />
        <LanguagesList id="languagesList" languages={languages}  onChange={onChange} />
      </label>
      <input className={classes.Search__button} type="submit" value="Search!" onClick={onSubmit} />
      <input className={classes.Search__button} type="submit" value="Surprise me!" onClick={onSubmit} />
    </form>
  );
};

export default Search;