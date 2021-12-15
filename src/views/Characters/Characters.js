import { React, useState, useEffect } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList.js';
import { fetchCharacters } from '../../services/characters.js';
import Selector from '../../components/Selector/Selector.js';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [race, setRace] = useState('All');
  const [query, setQuery] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const characterData = await fetchCharacters(race, query);
      setCharacters(characterData);
    };
    fetchData();
  }, [race, query]);
  return (
    <div>
      <Selector query={query} setQuety={setQuery} race={race} setRace={setRace} />
      <CharacterList characters={characters} />
    </div>
  );
}
