import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Circle } from '@react-google-maps/api';


//Circle Marker Restaurant
const center = {
    lat: 48.1201275,
    lng: 11.5712428
  }

  const options = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 50,
    zIndex: 1
  }
  
  const onLoad = circle => {
    console.log('Circle onLoad circle: ', circle)
  }
  
  const onUnmount = circle => {
    console.log('Circle onUnmount circle: ', circle)
  }



export default function aufDieFaustMap() {
    return (
      <LoadScript googleMapsApiKey="AIzaSyCbr81eikRxUAqmOypGYTQhA_d75Mlpj7w">
        <GoogleMap mapContainerStyle={mapStyles} center={center} zoom={15}>
            { /* Child components, such as markers, info windows, etc. */ }
            <Circle
      // optional
      onLoad={onLoad}
      // optional
      onUnmount={onUnmount}
      // required
      center={center}
      // required
      options={options}
    />
        </GoogleMap>
      </LoadScript>
    )
  }
  
 
  

//////////////////////////////////////////////
//Styling

//Google Maps
const mapStyles = {
  width: '100vw',
  height: '100vh'
}