import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({ largeImageUrl, alt, onClose }) => {

  useEffect(() => {
    console.log('Modal mounted');

    const handleKeyDown = event => {
      console.log('Key down:', event.code);
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      console.log('Modal unmounted');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    console.log('Backdrop click:', event.currentTarget === event.target);
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <div className={styles['image-container']}>
          <img src={largeImageUrl} alt={alt} />
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
