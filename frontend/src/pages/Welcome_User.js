import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components/macro'



export default function WelcomeUser() {
    const location = useLocation ()
    const history = useHistory();

    const welcomeUser = location.state.userProfile
    const handleClick = () => history.push('/login');
    

    return (
        <WelcomeUserwrapper imgUrl={'https://firebasestorage.googleapis.com/v0/b/food-map-app.appspot.com/o/logo%2FAnmeldung%20%E2%80%93%202.png?alt=media&token=0da038d6-71ea-4a56-b1ed-e7cb198a53fa'}>
			<div className="popup">
				<div className="popup__header">					
                    <img className="popup__header--image" src={'https://firebasestorage.googleapis.com/v0/b/food-map-app.appspot.com/o/logo%2FGruppe%201516.png?alt=media&token=eb7994d6-9654-40e3-9416-08cc476173e3'} alt=""/>              
				</div>

                <div className="popup__header">                    
                    <h2 className="popup__header--title heading-2">Willkommen <br/><strong>{welcomeUser.userName}</strong></h2>               
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
    background: url(${(props) => props.imgUrl}) center no-repeat ;
    background-size: cover;
   

    .popup{		
        margin-top: 18rem;

        &__header {
            display: flex;
            justify-content: center;
            margin: 2rem 0;

            &--title {
                font-size: 2.25rem;
                text-align: center;
                color: #fff;
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
    background-color: #FF5757;
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