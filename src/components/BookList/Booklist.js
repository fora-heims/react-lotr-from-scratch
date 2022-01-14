import React from 'react';

export default function Booklist(props) {
  return (
    <div>
      {props.books.map((book) => {
        return (
          <div key={book.id}>
            <span>{book.title}</span>
          </div>
        );
      })}
    </div>
  );
}
