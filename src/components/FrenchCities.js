import React from 'react';
import { useState } from 'react';
import FrenchCity from './FrenchCity';





const FrenchCities = (props) => {

    
    

    return (
        <div>
            {props.cities.map( (city) => (
                <FrenchCity key={city.id} cityFrance={city} onDelete={props.onDelete}/>
            ))}
            
        </div>
    )
}

export default FrenchCities
