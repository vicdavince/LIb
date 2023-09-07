import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMembers } from '../../features/members/members';
import Navbar from '../../components/navbar/Navbar';
import MainCard from '../../components/maincard/MainCard';
import Pagination from '../../components/pagination/Pagination';

const AllMembers = () => {

  const dispatch = useDispatch();

  const members_data = useSelector((state) => state.member.members);

  useEffect(() => {
    //request for all books from backend
    dispatch(fetchMembers());
  }, [dispatch])

  return (
    <main className="flex relative">
      <Navbar />
      <div className="main_content">
        <MainCard text="Add a Member" button="Create member" links="/members/create" />
        <div>
          {/* We only display when there is data from backend */}
          {members_data && <Pagination display={members_data} />}
        </div>
      </div>
    </main>
  )
}

export default AllMembers