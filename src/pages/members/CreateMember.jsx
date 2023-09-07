import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import MembersForm from '../../components/memberForm/MemberForm';

const CreateMember = () => {

  return (
    <main className="flex relative">
      <Navbar />
      <div className="main_content">
        <MembersForm />
      </div>
    </main>
  )
}

export default CreateMember