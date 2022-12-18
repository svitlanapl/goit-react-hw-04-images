import { ImageGalleryImageStyled } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  image: { tags, largeImageURL, webformatURL },
  onSelect,
}) => {
  return (
    <ImageGalleryImageStyled 
      src={webformatURL}
      alt={tags}
      onClick={() => {
        onSelect(largeImageURL);
      }}
    />
  );
};

