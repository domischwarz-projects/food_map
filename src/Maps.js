import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { InfoWindow } from '@react-google-maps/api';

//Google Maps
const mapStyles = {
  width: '100vw',
  height: '100vh'
};

const mapCenter = {
  lat: 48.137154,
  lng: 	11.576124
};

//Marker Restaurant
const position = {
    lat: 48.1201275,
    lng: 11.5712428
  }

const onLoadMark = marker => {
    console.log('marker: ', marker)
  };

  //InfoWindow
const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15
}

const onLoadWindow = infoWindow => {
  console.log('infoWindow: ', infoWindow)
}

function aufDieFaustMap() {
    return (
      <LoadScript googleMapsApiKey="AIzaSyCbr81eikRxUAqmOypGYTQhA_d75Mlpj7w">
        <GoogleMap
            mapContainerStyle={mapStyles}
            center={mapCenter}
            zoom={10}
        >
            { /* Child components, such as markers, info windows, etc. */ }
        <Marker
            onLoad={onLoadMark}
            position={position}
        />
        <InfoWindow
            onLoad={onLoadWindow}
            position={position}
        >
      <div style={divStyle}>
        <h3>Türkitsch</h3>
      </div>
    </InfoWindow>
       
        </GoogleMap>
      </LoadScript>
    )
  }
  
  export default React.memo(aufDieFaustMap)