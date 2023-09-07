import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import url from '../api/url';

const initialState = {
  loading: false,
  payload: {},
  error: '',
};

// Used to fetch all reservations
const fetchReservations = createAsyncThunk('reservations/fetchReservations', () => fetch(`${url}/reservations`)
  .then((res) => res.json())
  .then((data) => data));

//used to fetch a single reservation
const fetchReservation = createAsyncThunk('reservations/fetchReservation', (id) => fetch(`${url}/reservations/${id}`)
  .then((res) => res.json())
  .then((data) => data));

//used to create a reservation
const createReservationAction = createAsyncThunk('reservations/createReservation', (values) => fetch(`${url}/reservations`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(values),
}).then((res) => res.json())
  .then((data) => data));

const deleteReservation = createAsyncThunk('reservations/deleteReservation', (id) => fetch(`${url}/reservations/${id}`, {
  method: 'DELETE',
}).then((res) => res.json())
  .then((data) => data));


const membersSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchReservations.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        reservations: action.payload,
        error: '',
      }))
      .addCase(fetchReservations.rejected, (state, action) => ({
        ...state,
        loading: false,
        reservations: [],
        error: action.error.message,
      }))
      .addCase(fetchReservation.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchReservation.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        payload: action.payload,
        error: '',
      }))
      .addCase(fetchReservation.rejected, (state, action) => ({
        ...state,
        loading: false,
        payload: null,
        error: action.error.message,
      }))
      .addCase(createReservationAction.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(createReservationAction.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        createdReserv: action.payload,
        error: '',
      }))
      .addCase(createReservationAction.rejected, (state, action) => ({
        ...state,
        loading: false,
        createdReserv: null,
        error: action.error.message,
      }));
  },
});

export default membersSlice.reducer;
export { fetchReservations, fetchReservation, createReservationAction, deleteReservation };