import React from 'react';
import styled from 'styled-components/macro'
<<<<<<< HEAD
<<<<<<< HEAD
import FoodImage from '../images/restaurants_img/koefte.jpg'
=======
import FoodImage from '../images/restaurants_img/köfte.jpg'
>>>>>>> master
=======
import FoodImage from '../images/domi.JPG'
>>>>>>> parent of d6d7109... images

export default function Carousel() {
    return (
        <CarouselWrapper>
            <div className="carousel__first" >
            <p>FIRST</p>
            </div>
            <div className="carousel__second" >
            <p>SECOND</p>
            </div>
            <div className="carousel__third" >
            <p>THIRD</p>
            </div>
           <div className="carousel__fourth">
               <p>FOUR</p>
            </div>
            <div className="carousel__five">
            <p>FIVE</p>
            </div>
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
    display: flex;
    justify-content: center;

    p {
        font-size: 2rem;
        color: red;
        display: flex;
        align-items: center;
        
       
    }
}


.carousel{
   &__first {

   }
    &__second {
        margin-right: 370px;

        &:nth-child(2) {
        animation-delay: 2s;
        }
    }

    &__third{
        margin-left: 370px;

        &:nth-child(3) {
        animation-delay: 2s;
        }
    }

    &__fourth{
        margin-left: 740px;

        &:nth-child(4) {
        animation-delay: 2s;
        }
    }

    &__five{
        margin-right: 740px;

        &:nth-child(5) {
        animation-delay: 2s;
        }
    }

}
`