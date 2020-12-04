import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Map from './pages/Maps'

import UserCreate from './pages/UserCreate'
import RestaurantsDetail from './pages/Restaurants_Detail';
import RestaurantsQuickInfo from './pages/Restaurants_Quick'
import UsersFavourites from './pages/Users_Favourites'
import SideBar from './components/sidebar'






//definition of App component
function App() {
	return (
		<div className="App">
			<SideBar pageWrapId={"main"} outerContainerId={"App"} />
			<main>			
			<Map />
				<Switch>
					<Route path="/sign-up">
						<UserCreate />
					</Route>					
					<Route path="/favourites">
						<UsersFavourites />
					</Route>
					<Route path="/restaurant-detail">
					<RestaurantsDetail /> 
					</Route>
					<Route path="/restaurant-quick">
					<RestaurantsQuickInfo />
					</Route>					
				</Switch>
			</main>							
		</div>  
  	);
}





export default App;
