import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ onClick, isVisible }) => {
  const buttonLoadMoreRef = useRef(null);

  useEffect(
    () => {
      if (isVisible && buttonLoadMoreRef.current) {
        buttonLoadMoreRef.current.focus(); // focus on button when it is visible
      }
    }, [isVisible]
  );

  if (!isVisible) return null;

  return (
    <section className={styles.buttonSection}>
      <button className={styles.buttoncls} onClick={onClick}>
        Load more
      </button>
    </section>
  );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    isVisible: PropTypes.bool.isRequired
};

export default Button;