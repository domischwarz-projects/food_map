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
                <div className="popup__sign">
                    <h2 className="popup__sign--title heading-2">Sign Up</h2>    
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
        margin-top: 5.5rem;
		&__header {
            display: flex;
            justify-content: center;
			&--image{
				width: 200px;
				height: 200px;								
			}			
		}
        &__sign {
            margin-top: 4.813rem;

        }
    }
`
