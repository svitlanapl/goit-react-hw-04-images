import { Formik, Form } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';


const initialValues = {
  imageName: ''
};

let schema = yup.object().shape({
  imageName: yup.string().required()
});

export const SearchbarForm = ({ searchImage }) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    searchImage({
      imageName: values.imageName,
    });

    resetForm();
  };

  return (
    <Formik
      class="searchbar"
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}>
      <Form class="form">
        <button type="submit" class="button">
          <span class="button-label">Search</span>
        </button>
        
        <input
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </Form>
    </Formik>
  );
};

SearchbarForm.propTypes = {
  searchImage: PropTypes.func.isRequired,
};
 


