import { React, useState, useEffect } from 'react';
import Booklist from '../../components/BookList/Booklist.js';
import { fetchBooks } from '../../services/books.js';

export default function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const bookData = await fetchBooks();
      setBooks(bookData);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Booklist books={books} />
    </div>
  );
}
