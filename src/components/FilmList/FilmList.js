import React from 'react';

export default function FilmList(props) {
  return (
    <div>
      {props.films.map((film) => {
        return <span key={film.id}>{film.title}</span>;
      })}
    </div>
  );
}
