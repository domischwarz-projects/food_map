import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components/macro'
import Logo from '../images/food_logo.png'


export default function WelcomeUser() {
    const location = useLocation ()
    const history = useHistory();

    const welcomeUser = location.state.userProfile
    const handleClick = () => history.push('/login');
    

    return (
        <WelcomeUserwrapper>
			<div className="popup">
				<div className="popup__header">					
                    <img className="popup__header--image" src={Logo} alt=""/>              
				</div>

                <div className="popup__header">                    
                    <h2 className="popup__header--title heading-2">Willkomen <br/><strong>{welcomeUser.userName}</strong></h2>               
                </div> 
                               
                <div className="popup__btn">
                    <Button onClick={handleClick}>Login to Open Food Guide</Button>
                </div>
			</div>                               
        </WelcomeUserwrapper>
    )
};
const WelcomeUserwrapper = styled.form`
		
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
        margin: 4.75rem 0;

        &--title {
            font-size: 2.25rem;
            text-align: center;
        }

        &--image{
            width: 200px;
            height: 200px;								
        }			
    }
}        

`

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    color: #fff;
    background-color: #DC0F19;
    width: 100%;
    height: 48px;

    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 600;   
    transition: background-color ease-in-out .5s;

  &[disabled] {
    background-color: #8B0023;
  }
`;