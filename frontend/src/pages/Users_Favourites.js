import React from 'react'
import styled from 'styled-components/macro'




export default function UsersFavourites() {
    return (		
		<FavouritesWrapper>		
			<PopUp>
				<div className="popup">
					<div className="popup__favourites">
						<img className="popup__favourites--image" src={'https://firebasestorage.googleapis.com/v0/b/food-map-app.appspot.com/o/logo%2Ffood_logo.png?alt=media&token=6dc17304-0417-4048-861d-d618fe39fbba'} alt=""/>
						<div className="popup__favourites--content">
							<h2 className="heading-3">Türkitsch</h2>
							<p href="/#">Arnulfstraße 58, 80335 München</p>
						</div>					               
					</div>
					<hr/>
					<div className="popup__favourites">
						<img className="popup__favourites--image" src={'https://firebasestorage.googleapis.com/v0/b/food-map-app.appspot.com/o/logo%2Ffood_logo.png?alt=media&token=6dc17304-0417-4048-861d-d618fe39fbba'} alt=""/>
						<div className="popup__favourites--content">
							<h2 className="heading-3">Türkitsch</h2>
							<p href="/#">Arnulfstraße 58, 80335 München</p>
						</div>					               
					</div>
					<hr/>
					<div className="popup__favourites">
						<img className="popup__favourites--image" src={'https://firebasestorage.googleapis.com/v0/b/food-map-app.appspot.com/o/logo%2Ffood_logo.png?alt=media&token=6dc17304-0417-4048-861d-d618fe39fbba'} alt=""/>
						<div className="popup__favourites--content">
							<h2 className="heading-3">Türkitsch</h2>
							<p href="/#">Arnulfstraße 58, 80335 München</p>
						</div>					               
					</div>
					<hr/>
					<div className="popup__favourites">
						<img className="popup__favourites--image" src={'https://firebasestorage.googleapis.com/v0/b/food-map-app.appspot.com/o/logo%2Ffood_logo.png?alt=media&token=6dc17304-0417-4048-861d-d618fe39fbba'} alt=""/>
						<div className="popup__favourites--content">
							<h2 className="heading-3">Türkitsch</h2>
							<p href="/#">Arnulfstraße 58, 80335 München</p>
						</div>					               
					</div>
					<hr/>		
				</div>                               
			</PopUp>
		</FavouritesWrapper>
    )
};


//////////////////////////////////////////////
//Styling
const FavouritesWrapper = styled.div` 
`
const PopUp = styled.div`

	//Globalen Style drauß machen aus dem "PopUp" Fenster
    width: 100vw;
    position: absolute;
    top: 20rem;
    left: 0;
    background-color: #fff;
    border-radius: 2.6rem 2.6rem 0 0;
    padding: 2rem;
    box-shadow: 0 0.625rem 1.125rem #484848;
	


   .popup{
		margin: 2.813rem 0 0 1.219rem;
		//padding-bottom: 5rem;
		
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
			margin: 1.25rem 0 0 0;
		}	 
	}
    
`
