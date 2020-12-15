import { useEffect, useState } from 'react';
import styled from 'styled-components/macro'
import Logo from '../images/food_logo.png'
import { useHistory } from 'react-router-dom'


export default function UserCreate({ onSignIn }) {

    const history = useHistory();

    const [userProfile, setUserProfile] = useState({
    userName: '',        
    email: '',
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
            fetch('http://localhost:3001/sign-up', {                    //SERVER EINTRAGEN
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(userProfile),
            })
            .then((data) => data.json())  
            .then(user => {
                history.push('/welcome', {userProfile}) ;
                onSignIn(userProfile)
                console.log(user)  
            })
            .catch((error) => console.error(error));                          
        } else {
            alert('ERROR: somthing is wrong!');
        }
    }


    return (
        <PopUp onSubmit={sendForm}>
			<div className="popup">
				<div className="popup__header">					
                    <img className="popup__header--image" src={Logo} alt=""/>              
				</div>

                <div className="popup__sign">
                    <h2 className="popup__sign--title heading-2">Create Account</h2>    
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
                <div className="popup__email">
                    <label>
                        <p>Email</p>
                    <input
                        type="text"
                        name="email"
                        onChange={handleChange}
                        value={userProfile.email}
                    />
                    </label>
                </div>
               {/*  <div className="popup__password">
                    <label>
                        <p>Passwort</p>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={userProfile.password}
                    />
                    </label>
                </div> */}
                <div className="popup__btn">
                    <Button disabled={!formIsValid}>Sign Up</Button>
                </div>
                

			</div>                               
        </PopUp>
    )
};

//Muss ich nochmal anpassen mit ".lenght" 02.12.2020
const validateName = ({ userName }) =>
userName.length >= 2;

const hasValidDomain = (email) => {
const parts = email.split('.');
return parts.length >= 2 && parts[parts.length - 1].length >= 2;
};

const validateEmail = ({ email }) =>
email.includes('@') && hasValidDomain(email);

const validateForm = (userProfile) =>
validateName(userProfile) &&
validateEmail(userProfile);


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
				width: 100px;
				height: 100px;								
			}			
		}
        &__sign {
            margin-top: 4.75rem;
            margin-bottom: 1.44rem;

            &--title {
                font-size: 1.5rem;
                text-transform: none; 
            }
        }
        &__userName p,
        &__email p {
            font-size: .75rem;
            padding-bottom: .5rem;
        }

        &__userName,
        &__email {
            padding-bottom: 1.25rem;
        }
        
        input[type='text'],
        input[type='email'] {
            display: flex;
            width: 100%;
            height: 48px;
            border: 1px solid #C4C4C4;
            border-radius: 1.5rem; 
            font-size: .875rem;
            font-weight: 400;
            padding: 1rem;
            
            &:focus{
            outline: none;
            box-shadow: 0 0 0 1px #a9a9a9;            
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
    background-color: #DC0F19;
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
