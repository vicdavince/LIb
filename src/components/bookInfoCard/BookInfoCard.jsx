import React from 'react';
import PropTypes from 'prop-types';

const BookInfoCard = ({ book_data }) => {
  return (
    <div>
      <div className="flex justify-center">
        <img className="w-52 h-72 object-cover" src={book_data.image} alt={book_data.title} />
      </div>
      <div className="my-10">
        <div className="flex flex-col">
          <h2 className="font-bold text-xl">Information</h2>
          <hr className="my-4" />
          <div className="flex justify-around my-2">
            <p className="flex flex-col w-32"> <span className="font-bold">Title</span>{book_data.title}</p>
            <p className="flex flex-col w-32"><span className="font-bold">Author</span>{book_data.author}</p>
          </div>
          <div className="flex justify-around my-2">
            <p className="flex flex-col w-32"><span className="font-bold">Publisher</span>{book_data.publisher}</p>
            <p className="flex flex-col w-32"><span className="font-bold">Publish date</span> {book_data.publication_date}</p>
          </div>
          <div className="flex justify-around my-2">
            <p className="flex flex-col w-32"><span className="font-bold">Genre</span> {book_data.genre}</p>
            <p className="flex flex-col w-32"><span className="font-bold">Count</span>{book_data.amount}</p>
          </div>
        </div>
        <h2 className="font-bold text-xl mt-4">Description</h2>
        <hr className="my-3" />
        <p>
          {book_data.description}
        </p>
      </div>
    </div>
  )
}

BookInfoCard.propTypes = {
  book_data: PropTypes.object.isRequired,
}

export default BookInfoCard