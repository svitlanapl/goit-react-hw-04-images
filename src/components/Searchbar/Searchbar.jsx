import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  query: yup.string().required()
});

const initialValues = {
  query: '',
};

export const SearchbarForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
  };

  return (
    <Formik
      // class="searchbar"
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}>
      <Form 
        // class="form"
      >
        <button type="submit"
          // class="button"
        >
          <span
            // class="button-label"
          >Search</span>
        </button>
        
        <Field
          // class="input"
          type="text"
          name="query"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />
        <ErrorMessage name="query" />
      </Form>
    </Formik>
  );
};


