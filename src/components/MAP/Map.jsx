import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { dataList } from "../../constants/index";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: dataList.map((data) => ({ // Utiliser la méthode map pour créer un nouvel array d'objets avec les valeurs de dataList
        lat: data.latitude,
        lng: data.longitude,
        name: data.title
      }))
    };
  }

  redirectToMarker = (lat, lng) => {
    // redirige vers marqueur
    //window.location.href = `https://maps.google.com/maps?q=${lat},${lng}`;
    window.open(`https://maps.google.com/maps?q=${lat},${lng}`, '_blank');
  };

  renderMarkers() {
    return this.state.markers.map((marker, index) => (
      <Marker
        key={index}
        position={{ lat: marker.lat, lng: marker.lng }}
        onClick={() => this.redirectToMarker(marker.lat, marker.lng)} // Ajouter le gestionnaire d'événement de clic pour le marqueur
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