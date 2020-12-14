import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '../../node_modules/@react-google-maps/api';

const mapContainerStyle = {
	width: '100vw',
	height: '100vh'
};

const  libraries = ['places'];

const mapId = {
	mapId: 'ae90d8aa6c7fbaf2'
};

const center = {
    lat: 48.12895412211271,
    lng: 11.568265640300746
};

const options = {
	disableDefaultUI: true,
	zoomControl: false,
	getIcon: false,
	
};

const locations = [	
	{
		name: "Soul Kitchen",
		location: { 
			lat: 48.12956468120664, 
			lng: 11.574442999814972
		},
	},
	{
		name: "Mucki & Floyd",
		location: { 
			lat: 48.129790,
			lng: 11.570390
		},
	},
	{
		name: "Heyluigi",
		location: { 
			lat: 48.128790,
			lng: 11.568320
		},
	}	  

];

export default function Map() {
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_API_KEY,
		libraries,
	});
	
	if (loadError) return "Error loading maps";
	if (!isLoaded) return "Loading Maps";

	return(
		<GoogleMap
			mapContainerStyle={mapContainerStyle}
			mapId = {'ae90d8aa6c7fbaf2'}
			zoom={15}
			center={center}
			options={options}
			
		>
		{
			locations.map(item => {
              return (
              <Marker key={item.name} position={item.location}/>
              )
            })
         }			
		</GoogleMap>
	)
};




