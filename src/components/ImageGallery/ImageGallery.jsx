import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import { ImageGalleryStyled } from './ImageGallery.styled';

export const ImageGallery = ({ images, onSelect }) => {
  return (
    <>
      {images.length > 0 && (
          <ImageGalleryStyled>
            {images.map(image => {
              return (
                <li key={image.id}>
                  <ImageGalleryItem
                    image={image}
                    onSelect={onSelect} />
                </li>
              );
            })}
          </ImageGalleryStyled>
      )}
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};