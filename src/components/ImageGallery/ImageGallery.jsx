import { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

export class ImageGallery extends Component {
    state = {
        largeImageURL: null,
    };

    handleClickModal = (largeImageURL) => {
        this.props.openModal(largeImageURL);
    };

    render() { 
        const { imagesArrey } = this.props;

        return (
            <ul lass="gallery">
                {imagesArrey.map(({ id, webformatURL, largeImageURL }) => (
                    <ImageGalleryItem
                        key={id}
                        webformatURL={webformatURL}
                        largeImage={largeImageURL}
                        openModal={()=>this.handleClickModal(largeImageURL)}
                    />
                ))};
            </ul>
        ); 
    };
 };


ImageGallery.protoType = {
  imagesArrey: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};

