import React from 'react'
import { Route, Switch } from 'react-router-dom';
import FooterNav from './components/FooterNav'
import Map from './pages/Maps'
import UsersProfilPage from './pages/Users_Profile'
import UserCreate from './pages/UserCreate'
//import RestaurantsDetail from './pages/Restaurants_Detail';
//import RestaurantsQuickInfo from './pages/Restaurants_Quick'
import UsersFavourites from './pages/Users_Favourites.js'


//<RestaurantsQuickInfo />
//<RestaurantsDetail /> 



//definition of App component
function App() {
	return (
		<div className="App">
			<main>			
			<Map />
				<Switch>
					{/* <Route path="/login">
						<UserCreate />
					</Route> */}					
					<Route path="/profile">
						<UsersProfilPage />
					</Route>
					<Route path="/favourites">
						<UsersFavourites />
					</Route>
				</Switch>
			</main>
			<FooterNav />								
		</div>  
  	);
}





export default App;
