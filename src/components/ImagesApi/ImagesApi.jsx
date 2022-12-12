import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '31998541-7648904bbc4a538240a08fbfd';
const FILTER = 'image_type=photo&orientation=horizontal';
const PER_PAGE = 12;

export async function fetchImages(query, page = 1) {
  try {
    const r = await axios.get(`${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&${FILTER}&per_page=${PER_PAGE}`);
    if (r.data.hits.length === 0) {
      throw Error('Nothing was found for your request.');
    }
    return r.data;
  } catch (error) {
    console.log(error.config);
    if (error.r) {
      console.log(error.r.data);
      console.log(error.r.status);
      console.log(error.r.headers);
      throw Error('The server is not responding. Please try again later.');
    } else if (error.request) {
      console.log(error.request);
      throw Error('The server is not responding. Please try again later.');
    } else {
      console.log('Error', error.message);
      throw error;
    }
  }
}