import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Searchbar = ({onSubmit}) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
    setQuery('');
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
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default Searchbar;