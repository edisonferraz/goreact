import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Overlay, Container } from './styles';

const Modal = ({ close, children }) => (
  <Fragment>
    <Overlay onClick={close} />
    <Container>{children}</Container>
  </Fragment>
);

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
