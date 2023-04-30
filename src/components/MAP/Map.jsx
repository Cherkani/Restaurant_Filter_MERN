/*import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: []
    };
  }

  async componentDidMount() {
    try {
      // Appel à l'API pour obtenir les données des restaurants depuis la base de données
      const response = await fetch("http://localhost:3000/api/restaurants"); // Mettez l'URL de votre API
      const data = await response.json();
      this.setState({ markers: data.map((restaurant) => ({ // Utiliser la méthode map pour créer un nouvel array d'objets avec les valeurs des restaurants
        lat: restaurant.latitude,
        lng: restaurant.longitude,
        name: restaurant.title
      }))});
    } catch (error) {
      console.error(error);
    }
  }

  redirectToMarker = (lat, lng) => {
    // redirige vers marqueur
    window.open(`https://maps.google.com/maps?q=${lat},${lng}`, '_blank');
  };

  renderMarkers() {
    return this.state.markers.map((marker, index) => (
      <Marker
        key={index}
        position={{ lat: marker.lat, lng: marker.lng }}
        onClick={() => this.redirectToMarker(marker.lat, marker.lng)}
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
})(App);*/

///////////////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: []
    };
  }

  async componentDidMount() {
    try {
      // Appel à l'API pour obtenir les données des restaurants depuis la base de données
      const response = await fetch("http://localhost:3000/api/restaurants"); // Mettez l'URL de votre API
      const data = await response.json();
      this.setState({
        markers: data.map((restaurant) => ({
          lat: restaurant.latitude,
          lng: restaurant.longitude,
          name: restaurant.title
        }))
      });
    } catch (error) {
      console.error(error);
    }
  }

  redirectToMarker = (lat, lng) => {
    window.open(`https://maps.google.com/maps?q=${lat},${lng}`, "_blank");
  };

  renderMarkers() {
    return this.state.markers.map((marker, index) => (
      <Marker
        key={index}
        position={{ lat: marker.lat, lng: marker.lng }}
        onClick={() => this.redirectToMarker(marker.lat, marker.lng)}
        name={marker.name}
      />
    ));
  }

  render() {
    // Calculer les limites des marqueurs pour définir les limites de zoom initiales
    const { markers } = this.state;
    let bounds = new this.props.google.maps.LatLngBounds();
    for (let i = 0; i < markers.length; i++) {
      bounds.extend(markers[i]);
    }

    return (
      <Map
        google={this.props.google}
        zoom={14} // Définir le niveau de zoom initial
        initialCenter={{ lat: 0, lng: 0 }} // Définir le centre initial de la carte
        bounds={bounds} // Définir les limites de zoom initiales en fonction des marqueurs
      >
        {this.renderMarkers()}
        <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBq7lKLXUQM3FoQef8JeOJU5EQItDmONbQ",
})(App);

/*import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: []
    };
  }

  async componentDidMount() {
    try {
      // Appel à l'API pour obtenir les données des restaurants depuis la base de données
      const response = await fetch("http://localhost:3000/api/restaurants"); // Mettez l'URL de votre API
      const data = await response.json();
      this.setState({
        markers: data.map((restaurant) => ({
          lat: restaurant.latitude,
          lng: restaurant.longitude,
          name: restaurant.title
        }))
      });
    } catch (error) {
      console.error(error);
    }
  }

  redirectToMarker = (lat, lng) => {
    window.open(`https://maps.google.com/maps?q=${lat},${lng}`, "_blank");
  };

  renderMarkers() {
    return this.state.markers.map((marker, index) => (
      <Marker
        key={index}
        position={{ lat: marker.lat, lng: marker.lng }}
        onClick={() => this.redirectToMarker(marker.lat, marker.lng)}
        name={marker.name}
      />
    ));
  }

  render() {
    // Calculer les limites des marqueurs pour définir les limites de zoom initiales
    const { markers } = this.state;
    let bounds = new this.props.google.maps.LatLngBounds();
    for (let i = 0; i < markers.length; i++) {
      bounds.extend(markers[i]);
    }

    return (
      <Map
        google={this.props.google}
        zoom={14} // Définir le niveau de zoom initial
        initialCenter={{ lat: 0, lng: 0 }} // Définir le centre initial de la carte
        bounds={bounds} // Définir les limites de zoom initiales en fonction des marqueurs
      >
        {this.renderMarkers()}
        <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
      </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: "AIzaSyBq7lKLXUQM3FoQef8JeOJU5EQItDmONbQ",
})(App);*/