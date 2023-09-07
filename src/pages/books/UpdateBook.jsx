import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import BookForm from '../../components/bookForm/BookForm';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBook } from '../../features/books/books'

const UpdateBook = () => {

  const dispatch = useDispatch();
  const book_data = useSelector((state) => state.books.payload.book);
  const { id } = useParams();

  useEffect(() => {
    //request for all books from backend
    dispatch(fetchBook(id));
  }, [dispatch, id]);

  return (
    <main className="flex relative">
      <Navbar />
      <div className="main_content">
        {book_data && <BookForm book_data={book_data} />}
      </div>
    </main >
  )
}

export default UpdateBook