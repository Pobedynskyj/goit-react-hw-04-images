import { fetchImg } from './service/api';
import { useState } from 'react';

export const App = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [allImages, setAllImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return <div></div>;
};
