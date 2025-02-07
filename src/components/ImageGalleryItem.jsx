import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';


const ImageGalleryItem = ({ image, onImageClick }) => (
  <li className={styles.galleryItem} onClick={() => onImageClick(image.largeImageURL, image.tags)}>
    <img src={image.webformatURL} alt={image.tags} />
  </li>
);

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;