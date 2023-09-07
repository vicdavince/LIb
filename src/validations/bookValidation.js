import * as yup from "yup";

const bookSchema = yup.object().shape({
  amount: yup.number().positive().integer('Please enter integers').required('Amount is requied'),
  author: yup.string().required('Author is required'),
  description: yup.string().required('Description is required'),
  genre: yup.string().required('genre is required'),
  image: yup.string().required('Image is required'),
  publication_date: yup.string().required('Publication date is required'),
  publisher: yup.string().required('Publisher is required'),
  title: yup.string().required('Title is required'),
})

export default bookSchema;