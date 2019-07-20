import React from 'react';
import LanguagesList from '../LanguagesList/LanguagesList'

import styles from './Search.module.css'
import Autocomplete from '../../../common/components/Autocomplete/Autocomplete';

const Search = ({ label, placeholder, languages, onChange, onSubmit }) => {
  const langOptions = languages.map(
    lang =>({ id: lang.iso_639_1, label: lang.english_name})
  )

  return (
    <form className={styles.Search}>
      <label htmlFor="queryInput" className={styles.Search__title}>
        <span>I am looking for<span role="img" aria-label='eyes'>👀</span></span>
        <Autocomplete value={"TV-Shows"} readOnly />
      </label>
      <label htmlFor="queryInput" className={styles.Search__title}>
        <span>spoken in</span>
        <Autocomplete placeholder="a language" name="language" list="languagesList" onChange={onChange}>
          <Autocomplete.List id="languagesList" items={langOptions} onSelect={onChange} />
        </Autocomplete>
      </label>
      <input className={styles.Search__button} type="submit" value="Search!" onClick={onSubmit} />
      <input className={styles.Search__button} type="submit" value="Surprise me!" onClick={onSubmit} />
    </form>
  );
};

export default Search;