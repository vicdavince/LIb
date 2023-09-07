import * as yup from "yup";

const reservationSchema = yup.object().shape({
  member_id: yup.string().required('Member is required'),
  book_id: yup.string().required('Book is required'),
  cost: yup.number().positive().integer('Please enter integers').required('Cost is requied'),
  return_date: yup.string().required('Return date is required'),
  returned: yup.boolean().required('Returned must be a boolean')
})

export default reservationSchema;