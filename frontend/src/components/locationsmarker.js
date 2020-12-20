import React from 'react'
import { Marker} from '@react-google-maps/api';
import { useHistory } from 'react-router-dom';
import { locations } from '../fixtures/munichfoodlocations'

export default function LocationsMarker() {

    const history = useHistory();
    const handleLocationClick = (restaurantId) => {
        history.push('restaurant-detail/' + restaurantId);
    }

    return(
        <div>
            {
                locations.map(item => {
                    return (
                        <Marker 
                            key={item.name} 
                            position={item.location} 
                            id={item.id}                        
                            onClick={() => handleLocationClick(item.id)}                            
                        />                        
                    )
                })
            }           
        </div>        
    )
}