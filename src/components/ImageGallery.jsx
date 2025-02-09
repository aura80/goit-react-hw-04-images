import { useContext, useRef, useEffect } from 'react';
import { GalleryContext } from './GalleryContext';
import { nanoid } from 'nanoid';
import ImageGalleryItem from "./ImageGalleryItem";
import styles from './ImageGallery.module.css';

const ImageGallery = () => {
  const { images, onImageClick } = useContext(GalleryContext);
  const firstImgRef = useRef(null);

  useEffect(() => {
    if (firstImgRef.current) {
      firstImgRef.current.focus();
    }
  }, [images]);

  return (
    <ul className={styles.gallery}>
      {images.map((image, index) => (
        <ImageGalleryItem
          key={`${image.id}-${nanoid()}`} // to avoid id duplicates
          image={image}
          onImageClick={onImageClick}
          ref={index === 0 ? firstImgRef : null}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;