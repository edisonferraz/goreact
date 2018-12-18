import React, { Component, Fragment } from 'react';
import MapGL, { Marker } from 'react-map-gl';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as UserActions } from 'store/ducks/users';
import { Creators as ModalActions } from 'store/ducks/modal';

import { Buttons } from './styles';
import 'mapbox-gl/dist/mapbox-gl.css';

import Modal from '../Modal';
import UsersList from '../UsersList';

class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: 40.41687479058639,
      longitude: -3.7034279685259093,
      zoom: 14,
    },
    userInput: '',
    marker: {
      latitude: null,
      longitude: null,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    const { viewport } = this.state;

    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    const { showModalRequest } = this.props;

    console.log(longitude, latitude);

    showModalRequest();
    this.userInput.focus();

    this.setState({
      marker: {
        latitude,
        longitude,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { userInput, marker } = this.state;
    const { addUserRequest } = this.props;

    addUserRequest({ userInput, marker });

    this.setState({
      userInput: '',
    });
  };

  handleInputChange = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  closeModal = () => {
    const { hideModalRequest } = this.props;
    hideModalRequest();
    this.setState({
      userInput: '',
    });
  };

  render() {
    const { viewport, userInput } = this.state;
    const { users, showModal } = this.props;

    return (
      <Fragment>
        <MapGL
          {...viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken="pk.eyJ1IjoiZWRpc29uZmVycmF6IiwiYSI6ImNqcHF1OW5uaDBudzU0OG45ZXNydzBneDAifQ.f3DxVfRDPfVTXCwKcP7buQ"
          onViewportChange={vp => this.setState({ viewport: vp })}
        >
          {users.data.map(u => (
            <Marker
              key={u.id}
              latitude={u.latitude}
              longitude={u.longitude}
              onClick={this.handleMapClick}
              captureClick
            >
              <img
                style={{
                  borderRadius: 100,
                  width: 48,
                  height: 48,
                }}
                src={u.avatar}
                alt={u.name}
              />
            </Marker>
          ))}
        </MapGL>

        <UsersList />

        {showModal && (
          <Modal close={this.closeModal}>
            <form onSubmit={this.handleSubmit}>
              <strong>Adicionar novo usuário</strong>

              <input
                type="text"
                value={userInput}
                onChange={this.handleInputChange}
                ref={(input) => {
                  this.userInput = input;
                }}
                placeholder="Usuário do Github"
              />

              <Buttons>
                <button type="button" onClick={this.closeModal}>
                  Cancelar
                </button>
                <button type="submit">
                  {users.loading ? <i className="fa fa-spinner fa-pulse" /> : 'Adicionar'}
                </button>
              </Buttons>
            </form>
          </Modal>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  showModal: state.modal.show,
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...ModalActions,
    ...UserActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
