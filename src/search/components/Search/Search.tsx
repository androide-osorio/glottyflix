import React from 'react';
import { Language } from '../../models/languages'

import classes from './Search.module.css'

type SearchPropTypes = {
  label: string,
  placeholder: string,
  languages: Language[],
  onChange: any,
  onSubmit: any,
}

const Search = ({ label, placeholder, languages, onChange, onSubmit } : SearchPropTypes) => {
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
        <datalist id="languagesList" onChange={onChange}>
          {languages.map(lang =>
            <option key={lang.code} data-value={lang.code} value={lang.name} />
          )}
        </datalist>
      </label>
      <input className={classes.Search__button} type="submit" value="Search!" onClick={onSubmit} />
      <input className={classes.Search__button} type="submit" value="Surprise me!" onClick={onSubmit} />
    </form>
  );
};

export default Search;