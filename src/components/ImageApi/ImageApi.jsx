import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '31998541-7648904bbc4a538240a08fbfd';
const FILTER = 'image_type=photo&orientation=horizontal';
const PER_PAGE = 12;

export async function fetchImg(query, page = 1) {
  const response = await axios.get(`${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&${FILTER}&per_page=${PER_PAGE}`);
  return response;
  };

