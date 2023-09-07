import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../features/books/books';
import reservationsReducer from '../features/reservations/reservations';
import membersReducer from '../features/members/members';

// we create a redux store
export const store = configureStore({
  reducer: {
    books: booksReducer,
    reservation: reservationsReducer,
    member: membersReducer,
  },
})