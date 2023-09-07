import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMember } from '../../features/members/members';
import Navbar from '../../components/navbar/Navbar'
import { useParams } from 'react-router-dom'
import MembersForm from '../../components/memberForm/MemberForm';

const UpdateMember = () => {

  const dispatch = useDispatch();

  const member_data = useSelector((state) => state.member.payload.member);
  const { id } = useParams();

  useEffect(() => {
    //request for all books from backend
    dispatch(fetchMember(id));
  }, [dispatch, id]);

  return (
    <main className="flex relative">
      <Navbar />
      <div className="main_content">
        {member_data && <MembersForm member_data={member_data} />}
      </div>
    </main>
  )
}

export default UpdateMember