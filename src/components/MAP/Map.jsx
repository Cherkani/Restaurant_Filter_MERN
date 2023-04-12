import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        { lat: 44.233334, lng: -8.500000, name: "Marker 1" },
        { lat: 53.233334, lng: -9.500000, name: "Marker " },
        { lat: 23.233334, lng: -10.500000, name: "Marker 2" },
        { lat: 73.233334, lng: -11.500000, name: "Marker 3" },
        { lat: 93.233334, lng: -12.500000, name: "Marker 4" },
        { lat: 83.233334, lng: -13.500000, name: "Marker 5" },
        { lat: 13.233334, lng: -14.500000, name: "Marker 6" },
        { lat: 53.233334, lng: -15.500000, name: "Marker 7" },






      ],
    };
  }

  renderMarkers() {
    return this.state.markers.map((marker, index) => (
      <Marker
        key={index}
        position={{ lat: marker.lat, lng: marker.lng }}
        onClick={this.onMarkerClick}
        name={marker.name}
      />
    ));
  }

  render() {
    return (
      <Map google={this.props.google} zoom={1}>
        {this.renderMarkers()}

        <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBq7lKLXUQM3FoQef8JeOJU5EQItDmONbQ",
})(App);