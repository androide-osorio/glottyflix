import React from 'react';

import styles from './Search.module.css'
import Autocomplete from '../../../common/components/Autocomplete/Autocomplete';
import Button from '../../../common/components/Button/Button';

const Search = ({ languages, onChange, onSubmit }) => {
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
      <section className={styles.Search__actions}>
        <Button className={styles.Search__button} type="submit" variant="primary" click={onSubmit}>
          <span role="img" aria-label='search'>🔍</span>Search!
        </Button>
        <Button className={styles.Search__button} type="submit" variant="outlined" click={onSubmit}>
          <span role="img" aria-label='dice'>🎲</span>Surprise me!
        </Button>
      </section>
    </form>
  );
};

export default Search;