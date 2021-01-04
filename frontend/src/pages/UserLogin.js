import {  useEffect, useState } from 'react';
import styled from 'styled-components/macro'
import { saveToken } from '../services/tokenStorage';
import { useHistory } from 'react-router-dom'



export default function UserLogin({onSignIn}) {

    const history = useHistory();
  

    const [userProfile, setUserProfile] = useState({
    userName: '',  
    password: '',
    });

    const [formIsValid, setFormIsValid] = useState(false);

    function handleChange(event) {        
        setUserProfile({
            ...userProfile,
            [event.target.name]: event.target.value,
        });
    }

          
    useEffect(() => setFormIsValid(validateForm(userProfile)), [userProfile]);

    function sendForm(event) {
        event.preventDefault();
        if (validateForm(userProfile)) {
            fetch('http://localhost:3001/login', {                    //SERVER EINTRAGEN
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(userProfile),
            })
            .then((data) => data.json())              
            .then(user => {
                saveToken(user.accesstoken);
                onSignIn(userProfile)
                history.push('/map', {userProfile}) ;            
            })
            .catch((error) => console.error(error));                          
        } else {
            alert('ERROR: something is wrong!');
        }
    }

    const handleClick = () => history.push('/');
    return (
        <PopUp onSubmit={sendForm}>
			<div className="popup">
                <ButtonArrow onClick={handleClick}>
                    <img src={'https://firebasestorage.googleapis.com/v0/b/food-map-app.appspot.com/o/icons%2Fleft-arrow.svg?alt=media&token=1d9084d9-20ad-4ed8-b6ef-ce9000353b44'} alt=""/>
                </ButtonArrow>
				<div className="popup__header">					
                    <img className="popup__header--image" src={'https://firebasestorage.googleapis.com/v0/b/food-map-app.appspot.com/o/logo%2Ffood_logo.png?alt=media&token=6dc17304-0417-4048-861d-d618fe39fbba'} alt=""/>              
				</div>

                <div className="popup__login">
                    <h2 className="popup__login--title heading-2">Login</h2>    
                </div>
                
                <div className="popup__userName">
                    <label htmlFor="userName">
                        <p>User Name</p>
                    </label>
                    <input
                    type="text"
                    name="userName"
                    onChange={handleChange}
                    value={userProfile.userName}
                    />
                </div>                
                <div className="popup__password">
                    <label>
                        <p>Passwort</p>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={userProfile.password}
                    />
                    </label>
                </div>
                <div className="popup__btn">
                    <Button disabled={!formIsValid}>Login</Button>
                </div>
                <div className="popup__terms">
                    <p>By continuing, you agree to accept our Privacy Policy & Terms of Service.</p>
                </div>

			</div>                               
        </PopUp>
    )
};

//Muss ich nochmal anpassen mit ".lenght" 02.12.2020
const validateName = ({ userName }) =>
userName.length >= 4;

const validatePassword = ({ password }) =>
password.length >= 8;

const validateForm = (userProfile) =>
validateName(userProfile) &&
validatePassword(userProfile);


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
        margin-top: 5.5rem;

        //Quick Fix - saubere Lösung finden
        @media screen 
        and (min-device-height: 667px) 
        and (max-device-height: 811px)  { 
            margin-top: 1.5rem;
        }

		&__header {
            display: flex;
            justify-content: center;

			&--image{
				width: 180px;
				height: 180px;								
			}			
		}
        &__login {
            margin-top: 4.75rem;
            margin-bottom: 1.44rem;

            //Quick Fix - saubere Lösung finden
            @media screen 
            and (min-device-height: 667px) 
            and (max-device-height: 811px)  { 
                margin-top: 2.5rem;
            }

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
const ButtonArrow = styled.button `

    position: absolute;
    top: 4rem;
    left: 1.25rem;
    background: none;
    border: none;
    z-index: 10;
    outline: none;
    cursor: pointer;

    img {
        width: 30px;                
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
    cursor: pointer;
    border: none;
    border-radius: 5px;
    font-size: .75rem;
    font-weight: 600;   
   letter-spacing: .6px;
    text-transform: uppercase;
    transition: background-color ease-in-out .5s;

  &[disabled] {
    background-color: #8B0023;
  }
`;
