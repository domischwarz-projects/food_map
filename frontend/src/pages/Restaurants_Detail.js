import React, { useState, useEffect }  from 'react'
import { useParams } from 'react-router';
import FoodImage from '../images/restaurants_img/köfte.jpg'
import Placeholder from '../images/food_logo.png'
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
                <div className="header" >                
                    <h2 className="header--title heading-2">{restaurantProfile?.name}</h2>					                                 
				</div>
            <PopUp className="popup">  
                    <div className="popup__icons">
                    <img src={Placeholder} alt=""/>
                    <img src={Placeholder} alt=""/>
                    <img src={Placeholder} alt=""/>
                    <img src={Placeholder} alt=""/>
                    </div>              
                    <div className="popup__description">                                                
                        <p className="paragraph">{restaurantProfile?.description}</p>
                    </div>            
                    <div className="popup__time">
                        <div className="popup__time--header">
                            <img src={Placeholder} alt=""/>
                            <h3 className="heading-3">Öffnungszeiten</h3> 
                        </div>                                   
                        <ul className="popup__time--list">
                            <li>Montag......................{restaurantProfile?.monday}
                            </li>
                            <li>Dienstag....................{restaurantProfile?.tuesday}
                            </li>
                            <li>Mittwoch....................{restaurantProfile?.wednesday}
                            </li>
                            <li>Donnerstag................{restaurantProfile?.thursday}
                            </li>
                            <li>Freitag.......................{restaurantProfile?.friday}
                            </li>
                            <li>Samstag....................{restaurantProfile?.saturday}
                            </li>
                            <li>Sonntag.....................{restaurantProfile?.sunday}
                            </li>
                        </ul>            
                    </div>
                    <div className="popup__location">
                        <div className="popup__location--header">
                            <img src={Placeholder} alt=""/>
                            <h3 className="heading-3">Location</h3>
                        </div>                    
                        <p >{restaurantProfile?.street}, {restaurantProfile?.zipcode} {restaurantProfile?.city}</p>
                        <a href="tel:{restaurantProfile?.city}">{restaurantProfile?.phone}</a>
                    </div>
                    <div className="footer--popup">
                        <button className="popup__btn">Route</button>
                    </div>                        
            </PopUp>
        </RestaurantWrapper>
    )
};


//////////////////////////////////////////////
//Styling
const RestaurantWrapper = styled.div`
    .header {
        display: flex;
        justify-content: center;
        background: url(${FoodImage}) center no-repeat ;
        background-size: cover;
        height: 50vh;
        width: 100vw;
        position: fixed;
        top: 0;

        &--title {
            display: flex;
            align-items: center;
            font-size: 1.875rem;
            color: #fff;
        }
        &--image{
               
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

    .popup {
        &__description,
        &__time,
        &__location{
            margin-bottom: 3rem;                            
        }

        &__icons{
            display: flex;
            justify-content: space-evenly;
            margin-bottom: 1rem;
            img {           
            width: 26px;
            }  
        }
        &__time{
            &--header {
                display: flex;
                img {           
                width: 26px;
                }  
                h3{
                    padding-left: 1rem;
                }
            }
            &--list{
                padding: 0.875rem 0 1.4rem 0 ;
                list-style-type: none;
                li {
                    font-size: 1rem;
                    line-height: 2rem;
                    padding-left: 2.7rem;
                }                
            }            
        }

        &__location {          
            p {
                font-size: 1rem;
                line-height: 2rem;
                padding-left: 2.7rem;
                
            }
            &--header {
                display: flex;
                img {           
                width: 26px;
                }  
                h3{
                    padding-left: 1rem;
                }
            }                  
        }
    }
    

    button {
        width: 100%;
        height: 39px;
        border: none;
        background-color: #FF5757;
        color: #fff;
        border-radius: 0.25rem;
        opacity: 1;
        font-size: 1rem;
    } 
`
