import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMember } from '../../features/members/members';
import Navbar from '../../components/navbar/Navbar';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { deleteMember } from '../../features/members/members';
import MemberInfoCard from '../../components/memberInfoCard/MemberInfoCard';


const MambersInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const member_data = useSelector((state) => state.member.payload.member);
  const { id } = useParams();

  useEffect(() => {
    //request for all books from backend
    dispatch(fetchMember(id));
  }, [dispatch, id]);

  const deleteHandler = () => {
    dispatch(deleteMember(id));

    //Redirect to books
    navigate('/members');

    //reload destination page
    window.location.reload();

    //display toast message
    toast.success('Member deleted successfully', {
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
    <main>
      <Navbar />
      <aside className="main_content my-10">
        {member_data && <MemberInfoCard member_data={member_data} />}
        <div className='flex justify-end gap-4'>
          <Link to={`/members/update/${id}`} className="button_update">Update</Link>
          <Link to="#" className="button_delete" onClick={deleteHandler}>Delete</Link>
        </div>
      </aside>
    </main>
  )
}

export default MambersInfo