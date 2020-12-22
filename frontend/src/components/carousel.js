import React from 'react';
import styled from 'styled-components/macro'




export default function Carousel() {
    return (
        <CarouselWrapper>
            <div className="window carousel__first">
            <p>FIRST</p>
            </div>
            <div className="window carousel__second" >
            <p>SECOND</p>
            </div>
            <div className="window carousel__third" >
            <p>THIRD</p>
            </div>
           <div className="window carousel__fourth">
               <p>FOUR</p>
            </div>
            <div className="window carousel__five">
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
        transform: translate(0, -70px);
        width: 227px;
        height: 243px; 
    }
    &__second {
        margin-right: 420px;

        &:nth-child(2) {
        animation-delay: 2s;
        }
    }

    &__third{
        margin-left: 420px;

        &:nth-child(3) {
        animation-delay: 2s;
        }
    }

    &__fourth{
        margin-left: 840px;

        &:nth-child(4) {
        animation-delay: 2s;
        }
    }

    &__five{
        margin-right: 840px;

        &:nth-child(5) {
        animation-delay: 2s;
        }
    }

}
`