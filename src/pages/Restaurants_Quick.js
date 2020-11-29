import React from 'react'
import styled from 'styled-components/macro';



export default function RestaurantsQuickInfo() {
    return (
        <PopUp className="popup">
            <div className="popup__header">
                <h3 className="heading-3">Empfehlung</h3>
                <p className="paragraph">I’m baby cray yr raw denim blue bottle, beard quinoa schlitz.</p>
            </div>            
            <div className="popup__time">
                <h3 className="heading-3">Öffnungszeiten</h3>            
                <ul className="popup__time--list">
                    <li>Montag 10:00 - 20:00 Uhr</li>
                    <li>Dienstag 10:00 - 20:00 Uhr</li>                   
                </ul>                            
            </div>
            <div className="popup__location">
                <h3 className="heading-3">Location</h3>
                <p href="/#">Arnulfstraße 58, 80335 München</p>
                <a href="tel:+49 1523 7038463">+49 1523 7038463</a>
            </div>   
            <div>
                <button>See All</button>
            </div>                 
        </PopUp>
    )
};


//////////////////////////////////////////////
//Styling

const PopUp = styled.div`

    height: 70vh;
    width: 100vw;
    position: absolute;
    top: 20rem;
    left: 0;
    background-color: #fff;
    border-radius: 2.6rem;
    padding: 2rem;

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
