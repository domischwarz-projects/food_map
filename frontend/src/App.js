import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { loadToken } from './services/tokenStorage';

import SideBar from './components/sidebar'

import Map from './pages/Maps'
import UserCreate from './pages/UserCreate'
import RestaurantsDetail from './pages/Restaurants_Detail';
import UsersFavourites from './pages/Users_Favourites'
import WelcomeUser from './pages/Welcome_User'
import UserLogin from './pages/UserLogin'


function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(loadToken()!== '' 
	&& loadToken() !== null )
	const [userProfile, setUserProfile] = useState({userName:''})

	function handleSignIn(userProfile) {
		setIsLoggedIn(true)
		setUserProfile(userProfile)
	}
	return (
		<div className="App">
			{
			isLoggedIn && <SideBar pageWrapId={"main"} outerContainerId={"App"} userProfile={userProfile}/>
			}
			<main>						
				<Switch>
				
					<Route exact path="/">
						<UserCreate />		
					</Route>
					<Route path="/welcome">
						<WelcomeUser   />
					</Route>
					<Route path="/map">
						<Map />	
					</Route>											
					<Route path="/favourites">
						<UsersFavourites />
					</Route>
					<Route path="/login">
						<UserLogin onSignIn={handleSignIn}/>
					</Route>
					<Route path="/restaurant-detail/:restaurantId">
						<RestaurantsDetail /> 
					</Route>					
				</Switch>
			</main>							
		</div>  
  	);
}





export default App;
