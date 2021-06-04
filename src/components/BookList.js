import React from 'react';
import Book from './Book';
import books from '../data';

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return (
          <Book
            key={book.id}
            img={book.img}
            title={book.title}
            author={book.author}
          />
        );
      })}
    </section>
  );
};

export default BookList;
