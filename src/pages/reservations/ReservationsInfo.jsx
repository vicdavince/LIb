import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchReservation } from '../../features/reservations/reservations';
import MemberInfoCard from '../../components/memberInfoCard/MemberInfoCard';
import BookInfoCard from '../../components/bookInfoCard/BookInfoCard';
import { deleteReservation } from '../../features/reservations/reservations';
import { toast } from 'react-toastify';

const ReservationsInfo = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const reservations_data = useSelector((state) => state.reservation.payload.reservation);

  useEffect(() => {
    dispatch(fetchReservation(id))
  }, [dispatch, id])

  const updateHandler = () => {
    dispatch(deleteReservation(id));

    //Redirect to reservations
    navigate(`/reservations`);

    //reload destination page
    window.location.reload();

    // Display the toast message after the page has loaded
    toast.success('Reservation removed successfully', {
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
        {/* Display the book */}
        {reservations_data && <BookInfoCard book_data={reservations_data.book} />}
        {/* Display the member */}
        {reservations_data && <MemberInfoCard member_data={reservations_data.member} />}
        <div className='flex justify-end gap-4'>
          <button className="button_update" onClick={updateHandler}>Mark as Returned</button>
        </div>
      </aside>
    </main>
  )
}

export default ReservationsInfo