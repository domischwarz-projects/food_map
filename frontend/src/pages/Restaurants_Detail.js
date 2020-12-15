import React, { useState, useEffect }  from 'react'
import { useParams } from 'react-router';
import Logo from '../images/food_logo.png'
import styled from 'styled-components/macro';



export default function RestaurantsDetail() {

    const { restaurantId } = useParams();

    const [restaurantProfile, setRestaurantProfile] = useState({       
        cuisine: '',
        name: '',
        description: '',
        street: '', 
        zipcode: '',
        city: '',
        borough: '',
        openinghours: '',
        phone: '',
    })

    function fetchRestaurant() {
        fetch('http://localhost:3001/restaurants/' + restaurantId)
        .then(response => response.json())
        .then(restaurant => 
            setRestaurantProfile({
                cuisine: restaurant.cuisine,
                name: restaurant.name,
                description: restaurant.description,
                street: restaurant.address.street,
                zipcode: restaurant.address.zipcode,
                city: restaurant.address.city,
                borough: restaurant.address.borough,
                monday: restaurant.openinghours.monday,
                tuesday: restaurant.openinghours.tuesday,
                wednesday: restaurant.openinghours.wednesday,
                thursday: restaurant.openinghours.thursday,
                friday: restaurant.openinghours.friday,
                saturday: restaurant.openinghours.saturday,
                sunday: restaurant.openinghours.sunday,
                phone: restaurant.phone,
            })
        )
    } 
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => fetchRestaurant(), [])

    return (
        <RestaurantWrapper>
                <div className="bg__restaurant" >					
                    <img src={Logo} alt=""/>              
				</div>
            <PopUp className="popup">                
                    <div className="popup__header">
                        <h2 className="heading-2">{restaurantProfile?.name}</h2>
                        <p className="paragraph">{restaurantProfile?.description}</p>
                    </div>            
                    <div className="popup__time">
                        <h3 className="heading-3">Öffnungszeiten</h3>            
                        <ul className="popup__time--list">
                            <li><strong>Montag: </strong>{restaurantProfile?.monday}
                            </li>
                            <li><strong>Dienstag: </strong> {restaurantProfile?.tuesday}
                            </li>
                            <li><strong>Mittwoch: </strong>{restaurantProfile?.wednesday}
                            </li>
                            <li><strong>Donnerstag: </strong> {restaurantProfile?.thursday}
                            </li>
                            <li><strong>Freitag: </strong> {restaurantProfile?.friday}
                            </li>
                            <li><strong>Samstag: </strong> {restaurantProfile?.saturday}
                            </li>
                            <li><strong>Sonntag: </strong> {restaurantProfile?.sunday}
                            </li>
                        </ul>            
                    </div>
                    <div className="popup__location">
                        <h3 className="heading-3">Location</h3>
                        <p >{restaurantProfile?.street}, {restaurantProfile?.zipcode} {restaurantProfile?.city}</p>
                        <a href="tel:{restaurantProfile?.city}">{restaurantProfile?.phone}</a>
                    </div>
                    <div>
                        <button className="popup__btn">Route</button>
                    </div>                        
            </PopUp>
        </RestaurantWrapper>
    )
};


//////////////////////////////////////////////
//Styling
const RestaurantWrapper = styled.div`
    .bg__restaurant {
        position: fixed;
        top: 0;

        img{
            width: 100vw;    
        }
    }
    
   
`
const PopUp = styled.div`
    width: 100vw;
    position: absolute;
    top: 20rem;
    left: 0;
    background-color: #fff;
    border-radius: 2.6rem 2.6rem 0 0;
    padding: 2rem;
    box-shadow: 0 0.625rem 1.125rem #484848;

    .popup{
        &__header,
        &__time,
        &__location{
            margin-bottom: 3rem;                            
        }
        &__time{
            &--list{
                padding: 0.875rem 0 1.4rem 0 ;
                list-style-type: none;
            }            
        }
    }

    button {
        width: 100%;
        height: 39px;
        border: none;
        background-color: #F1F1F1;
        color: #8d8d8d;
        border-radius: 0.25rem;
        opacity: 1;
        font-size: 1rem;
    }
    
`
