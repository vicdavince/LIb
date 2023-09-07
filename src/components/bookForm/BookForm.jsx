import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import bookSchema from '../../validations/bookValidation';
import { createBookAction, updateBooks } from '../../features/books/books';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const BookForm = ({ book_data }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const requestType = book_data ? "update" : "create";
  const { id } = useParams();

  const onSubmit = (values) => {
    if (requestType === "update") {
      dispatch(updateBooks(values));

      //Redirect to book info
      navigate(`/books/${id}`);

      //reload destination page
      window.location.reload();

      // Display the toast message after the page has loaded
      toast.success('Book updated successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    } else {
      dispatch(createBookAction(values));

      //Redirect to book info
      navigate(`/`);

      //reload destination page
      window.location.reload();

      //display toast message
      toast.success('Book created successfully', {
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
  }

  const initialValues = book_data ? book_data : {
    amount: "",
    author: "",
    description: "",
    genre: "",
    image: "",
    publication_date: "",
    publisher: "",
    title: "",
  };

  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: bookSchema,
    onSubmit,
  })

  return (
    <div className="space-bottom">
      <form onSubmit={handleSubmit}>
        <div className="input-cards">
          <div className="flex flex-col">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.title && touched.title ? "input_error" : "all_inputs"}
              placeholder="Book title"
              required
            />
            {errors.title && touched.title && <p className="error_text">{errors.title}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="genre">Genre:</label>
            <input
              type="text"
              id="genre"
              name='genre'
              className={errors.genre && touched.genre ? "input_error" : "all_inputs"}
              value={values.genre}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Book genre"
              required
            />
            {errors.genre && touched.genre && <p className="error_text">{errors.genre}</p>}
          </div>
        </div>
        <div className="input-cards">
          <div className="flex flex-col">
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              name='author'
              value={values.author}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.author && touched.author ? "input_error" : "all_inputs"}
              placeholder="Authors name"
              required
            />
            {errors.author && touched.author && <p className="error_text">{errors.author}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="publisher">Publisher:</label>
            <input
              type="text"
              id="publisher"
              name='publisher'
              className={errors.publisher && touched.publisher ? "input_error" : "all_inputs"}
              value={values.publisher}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Book Publisher"
              required
            />
            {errors.publisher && touched.publisher && <p className="error_text">{errors.publisher}</p>}
          </div>
        </div>
        <div className="input-cards">
          <div className="flex flex-col">
            <label htmlFor="publicationDate">Publication Date:</label>
            <input
              type="date"
              id="publicationDate"
              name='publication_date'
              className={errors.publication_date && touched.publication_date ? "input_error" : "all_inputs"}
              value={values.publication_date}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Publication Date"
              required
            />
            {errors.publication_date && touched.publication_date && <p className="error_text">{errors.publication_date}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              name='amount'
              className={errors.amount && touched.amount ? "input_error" : "all_inputs"}
              value={values.amount}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="0"
              required
            />
            {errors.amount && touched.amount && <p className="error_text">{errors.amount}</p>}
          </div>
        </div>
        <div className="input-cards">
          <div className="flex flex-col">
            <label htmlFor="image">Image:</label>
            <input
              type="text"
              id="image"
              name='image'
              className={errors.image && touched.image ? "input_error" : "all_inputs"}
              value={values.image}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="http://example.com"
              required
            />
            {errors.image && touched.image && <p className="error_text">{errors.image}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name='description'
              className={errors.description && touched.description ? "input_error" : "all_inputs"}
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="What is the book about"
              required
            />
            {errors.description && touched.description && <p className="error_text">{errors.description}</p>}
          </div>
        </div>
        <div className="flex justify-end px-52">
          <button type="submit" disabled={isSubmitting} className="bg-azure p-2 mt-4 rounded-md text-white">
            {initialValues.title !== "" ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </div>
  )
}

BookForm.propTypes = {
  book_data: PropTypes.object,
}


export default BookForm