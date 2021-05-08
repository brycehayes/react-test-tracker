import React from 'react';
import { FaTimes } from 'react-icons/fa';

const FrenchCity = (props) => {
    return (
        <div className="city">
            <h3>{props.cityFrance.name} 
            <FaTimes style={{ color: 'red', cursor: 'pointer'}} onClick ={() => {props.onDelete(props.cityFrance.id)}}/></h3>
            <p>Population: {props.cityFrance.population}</p>
        </div>
    )
}

export default FrenchCity
