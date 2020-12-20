import React from 'react'


import styled from 'styled-components/macro'
import Logo from '../images/food_logo.png'

export default function SocialLoginStart(){

    
    return (
        <PopUp>
            <div className="popup">
                <div className="popup__header">					
                    <img className="popup__header--image" src={Logo} alt=""/>              
                </div>
                <div className="popup__login">
                    <h3 className="popup__login--title heading-3">Browse from over 500 restaurants in your area.</h3>    
                </div>
              
                
                <div className="popup__account">
                    <p>Already have an account? <span><a href="/login">login</a></span></p>
                </div>
            </div>
            
        </PopUp>
    )
};

const PopUp = styled.form`
		
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
        &__login {
            margin-top: 7.188rem;
            margin-bottom: 1.44rem;

            &--title {
                text-transform: none; 
                font-weight: 500;
            }
        }
    }
`    
