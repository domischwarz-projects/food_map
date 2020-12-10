import React, { useState, useEffect }  from 'react'
import styled from 'styled-components/macro';



export default function RestaurantsDetail() {
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
        fetch('http://localhost:3001/restaurants/300001')
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
                openinghours: restaurant.openinghours,
                phone: restaurant.phone,
            })
        )
    } 
    
    useEffect(() => fetchRestaurant(), [])

    return (
        <PopUp className="popup">
            <div className="popup__header">
                <h2 className="heading-2">{restaurantProfile?.name} <br/>{restaurantProfile?.borough}</h2>
                <p className="paragraph">{restaurantProfile?.description}</p>
            </div>            
            <div className="popup__time">
                <h3 className="heading-3">Öffnungszeiten</h3>            
                <ul className="popup__time--list">{restaurantProfile?.openinghours}</ul>            
            </div>
            <div className="popup__location">
                <h3 className="heading-3">Location</h3>
                <p >{restaurantProfile?.street}, {restaurantProfile?.zipcode} {restaurantProfile?.city}</p>
                <a href="tel:{restaurantProfile?.city}">{restaurantProfile?.phone}</a>
            </div>

            <div className="popup__menu">
                <h3 className="heading-3">Menu</h3>
            </div>            
        </PopUp>
    )
};


//////////////////////////////////////////////
//Styling

const PopUp = styled.div`
    //Wiederverwendbare Komponente erstellen
    height: 80vh;
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
