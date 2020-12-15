import React from 'react'
import { Marker } from '../../node_modules/@react-google-maps/api';

export default function Locations() {

    const locations = [	
        {
            name: "Soul Kitchen",
            location: { 
                lat: 48.12956468120664, 
                lng: 11.574442999814972
            },
        },
        {
            name: "Mucki & Floyd",
            location: { 
                lat: 48.129790,
                lng: 11.570390
            },
        },
        {
            name: "Heyluigi",
            location: { 
                lat: 48.128790,
                lng: 11.568320
            },
        }	  
    
    ];
    return(
        <div>
            {
			locations.map(item => {
              return (
              <Marker key={item.name} position={item.location}/>
              )
            })
         }
        </div>
    )
}