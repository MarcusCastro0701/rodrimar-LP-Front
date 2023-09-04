import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends React.Component {
    render() {
      const mapStyles = {
        width: '75%',
        height: '400px',
        margin: '5vw 3vh',
        borderRadius: '10px',
      };
  
      return (
        <Map
          google={this.props.google}
          zoom={17.8}
          style={mapStyles}
          initialCenter={{
            lat: -21.270745850277557,
            lng: -44.97870421005388,
          }}
        >
          <Marker
            position={{
              lat: -21.270885821806594,
              lng: -44.97831796866025,
            }}
            title="Ponto de Interesse"
          />
        </Map>
      );
    }
  }

export default GoogleApiWrapper({
  apiKey: '',
})(MapContainer);
