import React from 'react';

export default function CharacterList(props) {
  return (
    <div>
      {props.characters.map((char) => {
        return <span key={char.id}>{char.name}</span>;
      })}
    </div>
  );
}
