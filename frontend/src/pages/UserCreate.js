import { useEffect, useState } from 'react';
import styled from 'styled-components/macro'
import Logo from '../images/food_logo.png'


export default function UserCreate() {

    const [userProfile, setUserProfile] = useState({
    fullName: '',        
    email: '',
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
            .then(user => console.log(user))            
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
                    <h2 className="popup__sign--title heading-2">Sign Up</h2>    
                </div>
                
                <div className="popup__fullname">
                    <label htmlFor="fullName">
                        <p>Full Name</p>
                    </label>
                    <input
                    type="text"
                    name="fullName"
                    onChange={handleChange}
                    value={userProfile.fullName}                
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
                <div className="popup__btn">
                    <Button disabled={!formIsValid}>Sign Up</Button>
                </div>
                <div className="popup__terms">
                    <p>By continuing, you agree to accept our Privacy Policy & Terms of Service.</p>
                </div>

			</div>                               
        </PopUp>
    )
};

//Muss ich nochmal anpassen mit ".lenght" 02.12.2020
const validateName = ({ fullName}) =>
fullName.length >= 2;

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
				width: 200px;
				height: 200px;								
			}			
		}
        &__sign {
            margin-top: 4.75rem;
            margin-bottom: 1.44rem;

            &--title {
                font-size: 2.25rem;
                text-transform: none; 
            }
        }
        &__fullname p,
        &__email p {
            font-size: .75rem;
            padding-bottom: .5rem;
        }

        &__fullname,
        &__email {
            padding-bottom: 1.25rem;
        }
        
        input[type='text'],
        input[type='email'] {
            display: flex;
            width: 100%;
            height: 40px;
            border: 1px solid #C4C4C4;
            border-radius: .5rem; 
            font-size: .875rem;
            font-weight: 400;
            padding: 1rem;
            
            &:focus{
            outline:  #a9a9a9 auto 1px;            
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
