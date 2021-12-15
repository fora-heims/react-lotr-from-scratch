import React from 'react';

export default function Booklist(props) {
  return (
    <div>
      {props.books.map((book) => {
        return <span key={book.id}>{book.title}</span>;
      })}
    </div>
  );
}
