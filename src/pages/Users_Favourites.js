import React from 'react'
import styled from 'styled-components/macro'
import Logo from '../images/food_logo.png'



export default function UsersFavourites() {
    return (
        <PopUp>
			<div className="popup">
				<div className="popup__favourites">
					<img className="popup__favourites--image" src={Logo} alt=""/>
					<div className="popup__favourites--content">
						<h2 className="heading-3">Türkitsch</h2>
						<p href="/#">Arnulfstraße 58, 80335 München</p>
					</div>					               
				</div>
				<hr/>
				<div className="popup__favourites">
					<img className="popup__favourites--image" src={Logo} alt=""/>
					<div className="popup__favourites--content">
						<h2 className="heading-3">Türkitsch</h2>
						<p href="/#">Arnulfstraße 58, 80335 München</p>
					</div>					               
				</div>
				<hr/>
				<div className="popup__favourites">
					<img className="popup__favourites--image" src={Logo} alt=""/>
					<div className="popup__favourites--content">
						<h2 className="heading-3">Türkitsch</h2>
						<p href="/#">Arnulfstraße 58, 80335 München</p>
					</div>					               
				</div>
				<hr/>
				<div className="popup__favourites">
					<img className="popup__favourites--image" src={Logo} alt=""/>
					<div className="popup__favourites--content">
						<h2 className="heading-3">Türkitsch</h2>
						<p href="/#">Arnulfstraße 58, 80335 München</p>
					</div>					               
				</div>
				<hr/>		
			</div>                               
        </PopUp>
    )
};


//////////////////////////////////////////////
//Styling

const PopUp = styled.div`
	
	//Globalen Style drauß machen aus dem "PopUp" Fenster
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 12.5rem;
    left: 0;
    background-color: #fff;
    border-radius: 2.6rem;
    padding: 2rem;
	


   .popup{
		margin: 2.813rem 0 0 1.219rem;
		padding-bottom: 5rem;
		
		&__favourites {
			display: flex;
			align-items: center;
			
			&--image{
				width: 114px;
				height: 155px;
				align-items: center;
				border-radius: 1.5rem;				
				margin-right: 1rem;
			}			
		}
		hr{
			margin: 1.25rem 0;
		}	 
	}
    
`
