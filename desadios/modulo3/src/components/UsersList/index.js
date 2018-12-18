import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as UserActions } from 'store/ducks/users';

import { Ul, Li, BtnRemove } from './styles';

const UsersList = ({ users, removeUserRequest }) => (
  <Fragment>
    {!!users.length && (
      <Ul>
        {users.map(user => (
          <Li key={user.id}>
            <span>
              <img src={user.avatar} alt={user.name} />
              <span>
                <strong>{user.name}</strong>
                <small>{user.login}</small>
              </span>
            </span>
            <BtnRemove onClick={() => removeUserRequest(user.id)}>
              <i className="fa fa-close" />
            </BtnRemove>
          </Li>
        ))}
      </Ul>
    )}
  </Fragment>
);

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      login: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }),
  ).isRequired,
  removeUserRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.users.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersList);
