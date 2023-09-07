import React from 'react';
import PropTypes from 'prop-types';

const MemberInfoCard = ({ member_data }) => {
  return (
    <div>
      <div className="flex justify-center">
        <img className="w-52 h-72 object-cover rounded-full" src={member_data.image} alt={member_data.name} />
      </div>
      <div className="my-10">
        <h2 className="font-bold text-xl">Information</h2>
        <hr className="my-4" />
        <div className="flex flex-col">
          <div className="flex justify-between my-2">
            <p className="flex flex-col"> <span className="font-bold">Name</span>{member_data.name}</p>
            <p className="flex flex-col"><span className="font-bold">Phone</span>{member_data.phone_number}</p>
          </div>
          <div className="flex">
            <p className="flex flex-col"><span className="font-bold">Email</span> {member_data.email}</p>
          </div>
          <h2 className="font-bold text-xl mt-4">Account</h2>
          <hr className="my-4" />
          <div className="flex">
            <p><span className="font-bold">Debt:</span> {member_data.debt}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

MemberInfoCard.propTypes = {
  member_data: PropTypes.object.isRequired,
}

export default MemberInfoCard