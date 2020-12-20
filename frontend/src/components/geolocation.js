import React from 'react';
import styled from 'styled-components/macro'
import Location from '../images/map_img/cursor.svg'



export default function Geolocate({panTo}) {

    return(
		<ButtonLocate 
			onClick={() => {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						panTo({
							lat: position.coords.latitude,
							lng: position.coords.longitude,
						});
					},() => null
				);
			}}
		>
			<img src={Location} alt=""/>
		</ButtonLocate>       
    )
}

const ButtonLocate = styled.button `

	position: absolute;
	top: 1rem;
	right: 1rem;
	background: none;
	border: none;
	z-index: 10;
	outline: none;

	img {
		width: 30px;
		cursor: pointer;

	}

`
