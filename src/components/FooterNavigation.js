import { NavLink } from 'react-router-dom';
import styled from "styled-components/macro"

const FooterNavigation = () => {
    return (
        <NavWrapper>
            <NavLink to="/">Profil</NavLink>
            <NavLink to="/src/components/pages/Maps">Map</NavLink>
        </NavWrapper>
    )
}

export default FooterNavigation


const NavWrapper = styled.div`
    position: sticky;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    padding: 1rem;
    background-color: #151618;
    border-bottom: 1px solid rgba(244,245,246,0.12);

    a {
        text-decoration: none;
        color: #fff;
        margin:  1rem;
        text-transform: uppercase;

        a:active {
            color: #e9eaec;
        }
    }
`