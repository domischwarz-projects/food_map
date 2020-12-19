import React from 'react';
import styled from 'styled-components/macro'
import FoodImage from '../images/domi.JPG'

export default function Carousel() {
    return (
        <CarouselWrapper>
            <div className="carousel__one" >
            </div>
            <div className="carousel__second" >
            </div>
            <div className="carousel__third" >
            </div>
           {/*  <div className="carousel__fourth">
            </div>
            <div className="carousel__five">
            </div> */}
        </CarouselWrapper>
    )
}

const CarouselWrapper = styled.div`
position: relative;
display: flex;
justify-content: center;


div{
    position: absolute;    
    top: 620px; // Miriam nochmal quatschen Positionierungsfehler "bottom"   
    width: 172px;
    height: 172px;
    border-radius: 20px;
    background: url(${FoodImage}) center no-repeat ;
    background-size: cover;
    opacity: 1;
    animation: display 10s infinite;
}


.carousel{
   
    &__second {
        margin-right: 370px;
    }

    &__third{
        margin-left: 370px;
    }

    &__second:nth-child(2) {
    animation-delay: 2s;
    }
    &__third:nth-child(3) {
    animation-delay: 4s;
    }
    /* &__fourth:nth-child(4) {
    animation-delay: 6s;
    }
    &__fice:nth-child(5) {
    animation-delay: 8s;
    } */
}
`