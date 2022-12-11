import React, { Component } from "react";
import { SearchbarForm } from 'components/Searchbar';
// import { fetchImages } from 'components/ImagesApi/ImagesApi';


export class App extends Component {
  state = {
    query: null,
  };

  // componentDidMount(query, page = 1) {
  //   fetch(`${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&${FILTER}&per_page=${PER_PAGE}`)
  //     .then(response => response.json())
  //     // .then(console.log)
  //     .then(query => this.setState({ query }));
  //  };

  render() { 
    return (
      <div>
      <SearchbarForm
          searchImage={this.searchImage}>
        </SearchbarForm>
      </div>
    ) 
  };         
  
};
