import React from 'react';

export default function FilmList(props) {
  return (
    <div>
      {props.films.map((film) => {
        return (
          <div key={film.id}>
            <span>{film.title}</span>
          </div>
        );
      })}
    </div>
  );
}
