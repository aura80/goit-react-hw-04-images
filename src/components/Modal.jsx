import { useEffect, useRef, useContext } from 'react';
import { ModalContext } from './ModalContext';
import styles from './Modal.module.css';

const Modal = () => {
  const { largeImageUrl, alt, onClose } = useContext(ModalContext);
  const imageRef = useRef(null);

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
          <img src={largeImageUrl} alt={alt} ref={imageRef} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
