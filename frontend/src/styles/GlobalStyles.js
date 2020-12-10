import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  //////////////////////////////////////////////
  //GlobalStyling
  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    font-family: sans-serif;
    font-size: 62.5%;
    color: #484848; 
    line-height: 1.6;
     /* Prevent sidebar from showing a scrollbar on page */
    overflow: auto;
  }

  //////////////////////////////////////////////
  //Fonts
  .heading-1,
  .heading-2,
  .heading-3 {
    color: #2F2F2F; 
    
  }

  .heading-2 {
    font-size: 1.25rem; //20px
    line-height: 1.2;
    text-transform: uppercase;
   
    
  }

  .heading-3{
    font-size: 1rem; //16px
  }

  .paragraph {
    padding-top: 0.875rem;
  }

  p,li,a {
    font-size: 0.875rem; //14px
  }

  a {
    color: #484848; 
    text-decoration: none;    
  }

  //////////////////////////////////////////////
  //Buttons

  .btn{
        
    &__link {
      width: 100%;
        height: 39px;
        border: none;
        background-color: #F1F1F1;
        color: #8d8d8d;
        border-radius: 0.25rem;
        opacity: 1;
        font-size: 1rem;

    }
  }

`

 
    