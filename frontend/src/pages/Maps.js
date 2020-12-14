import React from 'react';
import { GoogleMap, useLoadScript } from '../../node_modules/@react-google-maps/api';

//import { formatRelative } from 'date-fns'
const mapStyles = {width: '100vw',height: '100vh'};

const  libraries = ['places'];

const center = {
    lat: 48.12895412211271,
    lng: 11.568265640300746
}

export default function Map() {

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
		libraries,
	});

	if (loadError) return "Error loading maps";
	if (!isLoaded) return "Loading Maps";

	return (
		
			<GoogleMap
			mapContainerStyle={mapStyles}
			zoom={10}
			center={center}
			
		></GoogleMap>
		
		
	)
}



