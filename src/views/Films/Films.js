import { React, useState, useEffect } from 'react';
import FilmList from '../../components/FilmList/FilmList.js';
import { fetchFilms } from '../../services/films.js';

export default function Films() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const filmData = await fetchFilms();
      setFilms(filmData);
    };
    fetchData();
  }, []);
  return (
    <div>
      <FilmList films={films} />
    </div>
  );
}
