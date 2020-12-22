import {useCallback, useRef} from 'react';
import { GoogleMap, useLoadScript} from '../../node_modules/@react-google-maps/api';
import LocationsMarker from '../components/locationsmarker';
import Geolocate from '../components/geolocation';
import { mapStyles} from '../styles/mapstyles';

const mapContainerStyle = {
	width: '100vw',
	height: '100vh'
};

const center = {
    lat: 48.12895412211271,
    lng: 11.568265640300746
};

const options = {
	styles: mapStyles,
	disableDefaultUI: true,
	mapTypeControl: false,
	zoomControl: false,
};

export default function Map() {

	const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
  		mapRef.current = map;
	}, []);

    const panTo = useCallback(({ lat, lng }) => {
    	mapRef.current.panTo({ lat, lng });
		mapRef.current.setZoom(14);
  	}, []);

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_API_KEY,
		
	});
	
	if (loadError) return "Error loading maps";
	if (!isLoaded) return "Loading Maps";

	return(
		<GoogleMap
			mapContainerStyle={mapContainerStyle}
			zoom={11}
			center={center}
			options={options}
			onLoad={onMapLoad}
		>
			<LocationsMarker/>
			<Geolocate panTo={panTo} />
			
			
		</GoogleMap>
	)
};






