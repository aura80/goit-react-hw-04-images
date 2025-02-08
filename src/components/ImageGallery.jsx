import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ images, onImageClick }) => (
  <ul className={styles.gallery}>
    {images.map(image => (
      <ImageGalleryItem
        key={image.id || nanoid()}
        image={image}
        onImageClick={onImageClick}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;