import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children }) => (
  <button onClick={onClick} type="submit">
    {children}
  </button>
);

Button.defaultProps = {
  children: 'Salvar',
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
};

export default Button;
