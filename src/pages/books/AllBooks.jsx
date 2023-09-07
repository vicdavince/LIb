import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../../features/books/books';
import Navbar from '../../components/navbar/Navbar';
import MainCard from '../../components/maincard/MainCard';
import Pagination from '../../components/pagination/Pagination';

const AllBooks = () => {
  const dispatch = useDispatch();

  let books_data = useSelector((state) => state.books.books);

  useEffect(() => {
    //request for all books from backend
    dispatch(fetchBooks());
  }, [dispatch])

  return (
    <main className="flex relative">
      <Navbar />
      <div className="main_content">
        <MainCard text="Add a Book" button="Create Book" links="/books/create" />
        <div>
          {/* We only display when there is data from backend */}
          {books_data && <Pagination display={books_data} />}
        </div>
      </div>
    </main>
  )
}

export default AllBooks