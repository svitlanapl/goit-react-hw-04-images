import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  id,
  openModal,
  webformatURL,
  largeImageURL,
  description
}) => {
  return (
    <li class="gallery-item"
      key={id}
      onClick={openModal}>
      <img
        src={webformatURL}
        alt={description}
        data-large={largeImageURL}
      />
    </li>
  );
};

ImageGalleryItem.prototype = {
  key: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  description: PropTypes.string,
};

