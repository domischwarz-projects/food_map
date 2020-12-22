import React from 'react';
import styled from 'styled-components/macro'




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
			<img src={'https://firebasestorage.googleapis.com/v0/b/food-map-app.appspot.com/o/map%2Ficons%2Fcursor.svg?alt=media&token=14d1c006-2ddc-40ea-815d-ea8ed5a8c46f'} alt=""/>
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
