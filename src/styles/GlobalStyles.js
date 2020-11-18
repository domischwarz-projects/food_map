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
  }

  //////////////////////////////////////////////
  //Fonts
  .heading-1,
  .heading-2,
  .heading-3 {
    color: #2F2F2F; 
    
  }

  .heading-2 {
    font-size: 1.25rem;
    line-height: 1.2;
    text-transform: uppercase;
  }

  .heading-3{
    font-size: 1rem;
  }
  .paragraph {
    padding-top: 0.875rem;
  }

  p,li,a {
    font-size: 0.875rem;
  }

  a {
    color: #484848; 
    text-decoration: none;
    
  }

  
  
`