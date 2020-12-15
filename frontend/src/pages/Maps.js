import React from 'react';
import { GoogleMap, useLoadScript } from '../../node_modules/@react-google-maps/api';
import Locations from '../components/locations';

const mapContainerStyle = {
	width: '100vw',
	height: '100vh'
};

const center = {
    lat: 48.12895412211271,
    lng: 11.568265640300746
};

const options = {
	disableDefaultUI: true,
	zoomControl: false
};

const noPoi = [
	{
		featureType: "poi",
		elementType: "all",
		"stylers": [
			{ 
			"visibility": "off" 
			}
		]  
	  }
];



export default function Map() {
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_API_KEY,
		
	});
	
	if (loadError) return "Error loading maps";
	if (!isLoaded) return "Loading Maps";

	return(
		<GoogleMap
			mapContainerStyle={mapContainerStyle}
			noPoi={noPoi}
			zoom={15}
			center={center}
			options={options}
			
		>
		<Locations />	
		</GoogleMap>
	)
};






