import * as yup from "yup";

const phoneRules = /^\+?[1-9]\d{1,14}$/;

const memberSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Should be a valid email').required('Email is required'),
  phone_number: yup.string().matches(phoneRules, 'Please enter a valid phone number.').required('Phone number is required.'),
  image: yup.string().required('Image is required'),
  debt: yup.number().integer('Please enter integers').required('Debt is requied'),
})

export default memberSchema;