import React from 'react'
import styled from 'styled-components/macro'
import Logo from '../images/food_logo.png'



export default function UserCreate() {
    return (
        <PopUp>
			<div className="popup">
				<div className="popup__header">					
                <img className="popup__header--image" src={Logo} alt=""/>              
				</div>				 
			</div>                               
        </PopUp>
    )
};


//////////////////////////////////////////////
//Styling

const PopUp = styled.div`
	
	//Globalen Style drauß machen aus dem "PopUp" Fenster
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100vw;
    background-color: #fff;
    padding: 2rem;

    .popup{		
        display: flex;
        justify-content: center;
        margin-top: 5.5rem;
		&__header {
			&--image{
				width: 200px;
				height: 200px;								
			}			
		}
    }
`
