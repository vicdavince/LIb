import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import BookForm from '../../components/bookForm/BookForm';

const CreateBook = () => {
  return (
    <main className="flex relative">
      <Navbar />
      <div className="main_content">
        <BookForm />
      </div>
    </main >
  )
}

export default CreateBook