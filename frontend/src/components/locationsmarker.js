import React from 'react'
import { Marker} from '@react-google-maps/api';
import { useHistory } from 'react-router-dom';

export default function LocationsMarker({restaurantprofile}) {

    const history = useHistory();
    
    const locations = [	      
        {
            name: "Würstelkönig",
            id: 3001,
            location: { 
                lat: 48.13010445394142, 
                lng: 11.561039532754647
            },
        },
        {
            name: "Marinas Feinkost",
            id: 3002,
            location: { 
                lat: 48.128790,
                lng: 11.568320
            },
        },
        {
            name: "Haxnsemmel",
            id: 3003,
            location: { 
                lat: 48.128790,
                lng: 11.568320
            },
        },
        {
            name: "Occam Deli",
            id: 3004,
            location: { 
                lat: 48.128790,
                lng: 11.568320
            },
        },
        {
            name: "Cubano & Nasty Jack",
            id: 3005,
            location: { 
                lat: 48.128790,
                lng: 11.568320
            },
        },
        {
            name: "Der Dantler",
            id: 3006,
            location: { 
                lat: 48.128790,
                lng: 11.568320
            },
        }	  
    ];

    // http://localhost:3000/restaurant-detail/300001
    const handleLocationClick = (restaurantId) => {
        history.push('restaurant-detail/' + restaurantId);
    }

    console.log(locations)
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