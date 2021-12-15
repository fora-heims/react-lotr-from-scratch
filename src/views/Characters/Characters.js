import { React, useState, useEffect } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList.js';
import { fetchCharacters } from '../../services/characters.js';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const characterData = await fetchCharacters();
      setCharacters(characterData);
    };
    fetchData();
  }, []);
  return (
    <div>
      <CharacterList characters={characters} />
    </div>
  );
}
