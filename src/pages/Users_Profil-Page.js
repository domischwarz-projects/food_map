import React from 'react'
import styled from 'styled-components/macro'
import Domi from '../images/domi.JPG'



export default function UsersProfilPage() {
    return (
        <PopUp>
			<div className="popup">
				<div className="popup__header">
					<img className="popup__header--image" src={Domi} alt=""/>
					<h2 className="popup__header--title heading-2">Hello, <br/><strong>Dominik</strong></h2>               
				</div>
				<div className="popup__favourites">
					<ul className="popup__favourites--list">
						<li>Türkitsch</li>
						<li>Türkitsch</li>
						<li>Türkitsch</li>			
					</ul>	
				</div>  
			</div>                               
        </PopUp>
    )
};


//////////////////////////////////////////////
//Styling

const PopUp = styled.div`
	
	//Globalen Style drauß machen aus dem "PopUp" Fenster
    height: 80vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    border-radius: 0 0 2.6rem 2.6rem;
    padding: 2rem;


   .popup{
		margin: 2.813rem 0 0 1.219rem;
		
		&__header {
			display: flex;
			align-items: center;
			
			&--image{
				width: 119px;
				height: 119px;
				align-items: center;
				border-radius: 1.5rem;
				margin-right: 1rem;
			}
			&--title{
				text-transform: none;
				font-weight: 400;
				strong{
					font-size: 1.875rem;
				}
			}
		}
	   
	   &__favourites{
		   margin-top: 3.375rem;
		   &--list{
				padding: 0.875rem 0 1.4rem 0;
                list-style: square inside;								
				li {
					padding: 1.563rem 0;	
					font-size: 1.25rem;
				}				
		   	}
	   	}
}
  
    
`
