import React from 'react'
import Map from './pages/Maps'
//import RestaurantsDetail from './pages/Restaurants_Detail';
import RestaurantsQuickInfo from './pages/Restaurants_Quick'
//import UsersProfilPage from './pages/Users_Profil-Page'
//import UsersFavourites from './pages/Users_Favourites.js'




//definition of App component
function App() {
  return (
      <div>
        <Map />        
        
        {/* <RestaurantsDetail /> */}
        <RestaurantsQuickInfo />
        {/* <UsersProfilPage /> */}
        {/* <UsersFavourites /> */}
      </div>  
  );
}

export default App;
