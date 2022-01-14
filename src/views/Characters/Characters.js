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
      const characterData = await fetchCharacters(race);
      setCharacters(characterData);
    };
    fetchData();
  }, [race]);

  const handleClick = async () => {
    const characterData = await fetchCharacters(race, query);
    setCharacters(characterData);
  };

  return (
    <div>
      <Selector
        handleClick={handleClick}
        query={query}
        setQuery={setQuery}
        race={race}
        setRace={setRace}
      />
      <CharacterList characters={characters} />
    </div>
  );
}
