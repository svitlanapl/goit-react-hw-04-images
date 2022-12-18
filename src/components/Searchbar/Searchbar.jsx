import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { SearchbarStyled, InputForm, Input, FormButton, } from './Searchbar.styled';

const schema = yup.object().shape({
  query: yup.string().required()
});

const initialValues = {
  query: '',
};

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = async (query, actions) => {

    await onSubmit(query.query);

    actions.resetForm();
  };

  return (
    <SearchbarStyled>
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}>
      <InputForm>
          <FormButton
            type="submit">
            <FcSearch size={28} />
          </FormButton>
          <ToastContainer />
          <Input
          type="text"
          name="query"
          placeholder="Search images and photos"
        />
          <ErrorMessage
            name="query"
          />
      </InputForm>
      </Formik>
      </SearchbarStyled>
  );
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

