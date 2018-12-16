import React, { Component, Fragment } from 'react';
import MapGL, { Marker } from 'react-map-gl';

import { connect } from 'react-redux';

import { Buttons } from './styles';
import 'mapbox-gl/dist/mapbox-gl.css';

import Modal from '../Modal';

class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },
    userInput: '',
    showModal: false,
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
    const [latitude, longitude] = e.lngLat;

    this.openModal();
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state.userInput);
  };

  handleInputChange = (e) => {
    this.setState({ userInput: e.target.value });
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false, userInput: '' });
  };

  render() {
    const { viewport, userInput, showModal } = this.state;

    return (
      <Fragment>
        <MapGL
          {...viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken="pk.eyJ1IjoiZWRpc29uZmVycmF6IiwiYSI6ImNqcHF1OW5uaDBudzU0OG45ZXNydzBneDAifQ.f3DxVfRDPfVTXCwKcP7buQ"
          onViewportChange={vp => this.setState({ viewport: vp })}
        >
          <Marker
            latitude={-23.5439948}
            longitude={-46.6065452}
            onClick={this.handleMapClick}
            captureClick
          >
            <img
              style={{
                borderRadius: 100,
                width: 48,
                height: 48,
              }}
              src="https://avatars3.githubusercontent.com/u/1264054?s=460&v=4"
              alt="map"
            />
          </Marker>
        </MapGL>

        {showModal && (
          <Modal close={this.closeModal}>
            <form onSubmit={this.handleSubmit}>
              <strong>Adicionar novo usuário</strong>

              <input
                type="text"
                value={userInput}
                onChange={this.handleInputChange}
                placeholder="Usuário do Github"
              />

              <Buttons>
                <button type="button" onClick={this.closeModal}>
                  Cancelar
                </button>
                <button type="submit">Adicionar</button>
              </Buttons>
            </form>
          </Modal>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  markers: state.markers,
});

export default connect(mapStateToProps)(Map);
