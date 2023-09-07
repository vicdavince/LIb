import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import url from '../api/url';

const initialState = {
  loading: false,
  payload: {},
  error: '',
};

// Used to fetch all books
const fetchBooks = createAsyncThunk('books/fetchBooks', () => fetch(`${url}/books`)
  .then((res) => res.json())
  .then((data) => data));

//used to fetch a single book
const fetchBook = createAsyncThunk('books/fetchBook', (id) => fetch(`${url}/books/${id}`)
  .then((res) => res.json())
  .then((data) => data));

//used to create a book
const createBookAction = createAsyncThunk('books/createBook', (values) => fetch(`${url}/books`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(values),
}).then((res) => res.json())
  .then((data) => data));

//used to update a book
const updateBooks = createAsyncThunk('books/updateBook', (values) => fetch(`${url}/books/${values.id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(values),
}).then((res) => res.json())
  .then((data) => data));


//used to delete a book
const deleteBook = createAsyncThunk('books/updateBook', (id) => fetch(`${url}/books/${id}`, {
  method: 'DELETE',
}).then((res) => res.json())
  .then((data) => data));

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchBooks.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        books: action.payload,
        error: '',
      }))
      .addCase(fetchBooks.rejected, (state, action) => ({
        ...state,
        loading: false,
        books: [],
        error: action.error.message,
      }))
      .addCase(fetchBook.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchBook.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        payload: action.payload,
        error: '',
      }))
      .addCase(fetchBook.rejected, (state, action) => ({
        ...state,
        loading: false,
        payload: null,
        error: action.error.message,
      }))
      .addCase(createBookAction.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(createBookAction.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        CreateResponse: action.payload,
        error: '',
      }))
      .addCase(createBookAction.rejected, (state, action) => ({
        ...state,
        loading: false,
        CreateResponse: null,
        error: action.error.message,
      }))
      .addCase(updateBooks.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(updateBooks.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        updateResponse: action.payload,
        error: '',
      }))
      .addCase(updateBooks.rejected, (state, action) => ({
        ...state,
        loading: false,
        updateResponse: null,
        error: action.error.message,
      }));
  },
});

export default booksSlice.reducer;
export { fetchBooks, fetchBook, createBookAction, updateBooks, deleteBook };