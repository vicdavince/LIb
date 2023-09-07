import React from 'react';
import { useDispatch } from 'react-redux';
import memberSchema from '../../validations/memberValidation';
import { useFormik } from 'formik';
import { createMemberAction, updateMember } from '../../features/members/members';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const MemberForm = ({ member_data }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const requestType = member_data ? "update" : "create";

  const onSubmit = (values) => {
    if (requestType === "update") {
      dispatch(updateMember(values));

      //Redirect to member info
      navigate(`/members/${id}`);

      //reload destination page
      window.location.reload();


      // Display the toast message after the page has loaded
      toast.success('Member updated successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (requestType === "create") {
      dispatch(createMemberAction(values));

      //Redirect to book info
      navigate('/members');

      //reload destination page
      window.location.reload();

      //display toast message
      toast.success('Book created successfully', {
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

  }

  const initialValues = member_data ? member_data : {
    name: "",
    email: "",
    debt: 0,
    phone_number: "",
    image: "",
  }

  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: memberSchema,
    onSubmit: onSubmit,
  })

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-cards">
        <div className="flex flex-col">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name='name'
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name && touched.name ? "input_error" : "all_inputs"}
            placeholder="Name"
            required
          />
          {errors.name && touched.name && <p className="error_text">{errors.name}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email ? "input_error" : "all_inputs"}
            placeholder="example@gmail.com"
            required
          />
          {errors.email && touched.email && <p className="error_text">{errors.email}</p>}
        </div>
      </div>
      <div className="input-cards">
        <div className="flex flex-col">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name='phone_number'
            value={values.phone_number}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.phone_number && touched.phone_number ? "input_error" : "all_inputs"}
            placeholder="+254"
            required
          />
          {errors.phone_number && touched.phone_number && <p className="error_text">{errors.phone_number}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="image">Image:</label>
          <input
            type="text"
            id="image"
            name='image'
            value={values.image}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.image && touched.image ? "input_error" : "all_inputs"}
            placeholder="http://example.com"
            required
          />
          {errors.image && touched.image && <p className="error_text">{errors.image}</p>}
        </div>
      </div>
      <div className="input-cards">
        {initialValues.name !== "" ?
          <div className="flex flex-col">
            <label htmlFor="debt">Debt:</label>
            <input
              type="number"
              id="debt"
              name='debt'
              value={values.debt}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.debt && touched.debt ? "input_error" : "all_inputs"}
              placeholder="0"
              required
            />
            {errors.debt && touched.debt && <p className="error_text">{errors.debt}</p>}
          </div> : ""}
        {initialValues.name !== "" ? <div><input type="" /></div> : ""}
      </div>
      <div className="flex justify-end px-52">
        <button type="submit" disabled={isSubmitting} className="bg-azure p-2 mt-4 rounded-md text-white">
          {initialValues.name !== "" ? "Update" : "Create"}
        </button>
      </div>
    </form>
  )
}

MemberForm.propTypes = {
  member_data: PropTypes.object,
}

export default MemberForm