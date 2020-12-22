import React from 'react';
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'




export default function ButtonMap({panTo}) {
	const history = useHistory();
	const handleClick = () => history.push('/map');

    return(
		<ButtonIconMap onClick={handleClick}>
			<img src={'https://firebasestorage.googleapis.com/v0/b/food-map-app.appspot.com/o/map%2Ficons%2Flocation.svg?alt=media&token=ac8a4ec5-d52b-47ea-b9a1-9cc9a8f21757'} alt=""/>
		</ButtonIconMap>       
    )
}

const ButtonIconMap = styled.button `

	position: fixed;
	top: 1rem;
	right: 1.5rem;
	background: none;
	border: none;
	z-index: 10;
	outline: none;

	img {
		width: 30px;
		cursor: pointer;

	}

`
