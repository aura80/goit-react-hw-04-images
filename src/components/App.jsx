import { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Modal from './Modal';
import Button from './Button';
import Loader from './Loader';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState('');
  const [alt, setAlt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    const fetchImages = async () => {
      if (query === '') return;

      const API_KEY = process.env.REACT_APP_API_KEY;
      const URL = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

      setIsLoading(true);

      try {
        const response = await axios.get(URL);
        console.log('Hits: ', response.data.hits);
        setImages(previousImages => [...previousImages, ...response.data.hits]);
        // setIsLoading(false);
      } catch (error) {
        console.error('Error at fetch: ', error);
        setIsLoading(false);
      }
    };
    
    fetchImages();
  }, [query, page]);
  
  const handleSearchSubmit = newQuery => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleImageClick = (newLargeImageUrl, newAlt) => {
    console.log('Image clicked:', { newLargeImageUrl, newAlt });
    setLargeImageUrl(newLargeImageUrl);
    setAlt(newAlt);
    setShowModal(true);
  };

  const toggleModal = () => {
    console.log('Modal toggled:', !showModal);
    setShowModal(!showModal);
  };

  const loadMore = () => {
    console.log('Load more images: ', page);
    setPage(previousPage => previousPage + 1);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {showModal && (
        <Modal
          largeImageUrl={largeImageUrl}
          alt={alt}
          onClose={toggleModal}
        />
      )}
      {isLoading && <Loader />}
      <Button onClick={loadMore} isVisible={images.length > 0} />
    </div>
  );
};

export default App;
