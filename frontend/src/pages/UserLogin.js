import React from 'react'
import styled from 'styled-components/macro'
import Logo from '../images/food_logo.png'


export default function UserLogin() {

   

    return (
        <PopUp >
			<div className="popup">
				<div className="popup__header">					
                    <img className="popup__header--image" src={Logo} alt=""/>              
				</div>

                <div className="popup__login">
                    <h2 className="popup__login--title heading-2">Sign Up</h2>    
                </div>
                
                <div className="popup__userName">
                    <label htmlFor="userName">
                        <p>User Name</p>
                    </label>
                    <input
                    type="text"
                    name="userName"
                               
                    />
                </div>                
                <div className="popup__password">
                    <label>
                        <p>Passwort</p>
                    <input
                        type="password"
                        name="password"
                        
                    />
                    </label>
                </div>
                <div className="popup__btn">
                    <Button >Sign Up</Button>
                </div>
                <div className="popup__terms">
                    <p>By continuing, you agree to accept our Privacy Policy & Terms of Service.</p>
                </div>

			</div>                               
        </PopUp>
    )
};



//////////////////////////////////////////////
//Styling
const PopUp = styled.form`
		
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100vw;
    background-color: #fff;
    padding: 2rem;

    .popup{		
        margin-top: 3.5rem;
      
		&__header {
            display: flex;
            justify-content: center;

			&--image{
				width: 200px;
				height: 200px;								
			}			
		}
        &__login {
            margin-top: 4.75rem;
            margin-bottom: 1.44rem;

            &--title {
                font-size: 2.25rem;
                text-transform: none; 
            }
        }
        &__userName p,
        &__password p {
            font-size: .75rem;
            padding-bottom: .5rem;
        }

        &__userName,
        &__password {
            padding-bottom: 1.25rem;
        }
        
        input[type='text'],
        input[type='password'] {
            display: flex;
            width: 100%;
            height: 48px;
            border: 1px solid #C4C4C4;
            border-radius: .5rem; 
            font-size: .875rem;
            font-weight: 400;
            padding: 1rem;
            
            &:focus{
            outline: none;
            box-shadow: 0 0 0 1px #a9a9a9;            
            }
        }
        &__terms {
            text-align: center;
            padding: 1.5rem 3rem;
            p {
                font-size: 0.625rem;
            }
        } 
            
    }
`
//Globalen Style drauß machen 02.12.2020
const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    color: #fff;
    background-color: #FF5757;
    width: 100%;
    height: 48px;

    border: none;
    border-radius: 5px;
    font-size: .75rem;
    font-weight: 600;   
    transition: background-color ease-in-out .5s;

  &[disabled] {
    background-color: #8B0023;
  }
`;
