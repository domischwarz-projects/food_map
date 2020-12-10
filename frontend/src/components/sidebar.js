import React from 'react'
import { NavLink } from 'react-router-dom';
import { slide as Menu} from 'react-burger-menu'
import '../styles/burgermenu.css'
import Domi from '../images/domi.JPG'
import styled from 'styled-components/macro'



export default function Sidebar({userProfile}) {   
    
    return (
        
        <Menu>
            <SideBar>            
                <div className="sidebar__header">
                    <img className="sidebar__header--image" src={Domi} alt=""/>
                    <h2 className="sidebar__header--title heading-2">Hello, <br/><strong>{userProfile.userName}</strong></h2>               
                </div>   
                <hr/>                   
            </SideBar>
            
            <NavLink className="menu-item" to="/map">Map</NavLink>
            <NavLink className="menu-item" to="/">Sign Up</NavLink>
            <NavLink className="menu-item" to="/login">Login</NavLink>                    
            <NavLink className="menu-item" to="/favourites">Favourites</NavLink>
            <NavLink className="menu-item" to="/restaurant-detail">Restaurant Detail</NavLink>                         
        </Menu>
    )
}



//////////////////////////////////////////////
//Styling
const SideBar = styled.div`
    outline: none;

    .sidebar{
        			
		&__header {
            margin: 4rem 2rem;	
			display: flex;
            align-items: center;
            
            
			&--image{
				width: 60px;
				height: 60px;
				align-items: center;
				border-radius: 100%;
				margin-right: 1rem;
			}
			&--title{
				text-transform: none;
				font-weight: 400;
				strong{
					font-size: 1.2rem;
				}
			}
        }
    }
    hr{
        margin-bottom: 4rem;
    }
       
`
