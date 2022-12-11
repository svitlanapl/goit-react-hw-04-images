const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '31998541-7648904bbc4a538240a08fbfd';
const FILTER = 'image_type=photo&orientation=horizontal';
const PER_PAGE = 12;

export const fetchImages = (query, page = 1) => {
    fetch(`${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&${FILTER}&per_page=${PER_PAGE}`)
      .then(response => response.json())
      // .then(console.log)
      .then(query => this.setState({ query }));
};