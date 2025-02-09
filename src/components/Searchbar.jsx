import { useContext, useState, useRef } from 'react';
import { SearchContext } from './SearchContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from './Searchbar.module.css';

const Searchbar = () => {
  const { onSubmit } = useContext(SearchContext);
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
    setQuery('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <header className={styles.searchbar}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.searchButton}>
          <span className={styles.buttonLabel}>Search</span>
          <FontAwesomeIcon icon={faSearch} />
        </button>

        <input
          className={styles.searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
          ref={inputRef}
        />
      </form>
    </header>
  );
}

export default Searchbar;