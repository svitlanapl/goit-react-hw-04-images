import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '31998541-7648904bbc4a538240a08fbfd';
const FILTER = 'image_type=photo&orientation=horizontal';
const PER_PAGE = 12;

export const fetchImages = (searchQuery, page = 1) => {
  return axios
    .get(`${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&${FILTER}&per_page=${PER_PAGE}`)
    // .then(console.log)
    .then((responce) => responce.data.hits);
};


