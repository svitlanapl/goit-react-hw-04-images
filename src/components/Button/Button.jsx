import PropTypes from 'prop-types';
import { ButtonStyled, ButtonLoadMore } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <ButtonStyled>
      <ButtonLoadMore
        type="button"
        onClick={onClick}>
        Load more
      </ButtonLoadMore>
    </ButtonStyled>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};