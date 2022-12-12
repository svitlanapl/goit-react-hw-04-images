import React, { Component } from "react";
import { fetchImages } from 'components/ImagesApi/ImagesApi';
import { SearchbarForm } from 'components/Searchbar';
import { ImageGallery } from "components/ImageGallery";
// import { SearchbarForm } from 'components/Searchbar';



export class App extends Component {
  state = {
    imagesArrey: [],
    searchQuery: '',
    page: 1,
    totalImages: 0,
    currentImageUrl: null,
    currentImageDescription: null,
    // showModal: false,
    // isLoading: false,
    // error: false
    
  };

  componentDidUpdate(_, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      this.fetchImagesArrey();
    };
  };
  
  fetchImagesArrey = () => {
    const { searchQuery, page } = this.state;
    this.setState();
    fetchImages(searchQuery, page)
      .then(imagesArrey =>
        this.setState(prevState => ({
          imagesArrey: [...prevState.imagesArrey, ...imagesArrey],
          // totalImages: response.totalHist,
        }))
      )
    // .catch(error => this.setState({ error: true }))
    // .finally(() => this.setState({ isLoading: false }));
  };

  getSearchRequest = (query = '') => {
    if (this.setState.searchQuery !== query && query !== '') {
      this.setState({
        imagesArrey: [],
        searchQuery: query,
        page: 1,
        totalImages: 0,
      });
    };
  };

  render() {
    const {
      imagesArrey,
      // searchQuery,
      // page,
      // totalImages
    } = this.state;

    return (
      <div>
        <SearchbarForm onSubmit={this.getSearchRequest} />
        {imagesArrey.length > 0 && (
          <ImageGallery
            imagesArrey={imagesArrey} />
        )}
      </div>
    )
  };
};              
  
