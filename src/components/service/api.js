import axios from 'axios';

const API_KEY = '31254208-ff4dd95c44a4a79ef6d4abce7';
let Api = `https://pixabay.com/api`;

export const fetchImg = async (query, page = 1) => {
  const response = await axios.get(
    `${Api}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
