import { NavLink } from 'react-router-dom';
import styled from "styled-components/macro"

const FooterNav = () => {
    return (
        <NavWrapper>
           
            <NavLink to="/">Map</NavLink>
            <NavLink to="/profile">Profil</NavLink> 
            <NavLink to="/favourites">Favourites</NavLink>            
        </NavWrapper>
    )
}

export default FooterNav


const NavWrapper = styled.div`
    position: fixed;
    bottom: .5rem;
    right: 1.5rem;
    left: 1.5rem;
    display: flex;
    justify-content: center;
    background-color: #DC0F19;
    border-radius: .5rem;
    
    a {
        text-decoration: none;
        color: #fff;
        margin:  1rem;
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 500;
        a:active {
            color: #e9eaec;
        }
    }
`