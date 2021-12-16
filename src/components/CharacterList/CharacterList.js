import React from 'react';

export default function CharacterList(props) {
  return (
    <div>
      {props.characters.map((char) => {
        return (
          <div key={char.id}>
            <span>{char.name}</span>
          </div>
        );
      })}
    </div>
  );
}
