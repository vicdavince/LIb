import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import { Link, useParams } from 'react-router-dom';
import { fetchBook, deleteBook } from '../../features/books/books';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import BookInfoCard from '../../components/bookInfoCard/BookInfoCard';

const BookInfo = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const book_data = useSelector((state) => state.books.payload.book);
  const { id } = useParams();

  useEffect(() => {
    //request for all books from backend
    dispatch(fetchBook(id));
  }, [dispatch, id]);

  const deleteHandler = () => {
    dispatch(deleteBook(id));

    //Redirect to books
    navigate(`/`);

    //reload destination page
    window.location.reload();

    //display toast message
    toast.success('Book deleted successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <main className="space-bottom">
      <Navbar />
      <aside className="main_content">
        {/* We only display if there is data from backend */}
        {book_data && <BookInfoCard book_data={book_data} />}
        <div className='flex justify-end gap-4'>
          <Link to={`/books/update/${id}`} className="button_update">Update</Link>
          <button className="button_delete" onClick={deleteHandler}>Delete</button>
        </div>
      </aside>
    </main >
  )
}

export default BookInfo