import React from 'react';
import { useState } from 'react';
import Bike from './Bike';

const Bikes = (props) => {

    return (
        <div>
            {props.bikes.map((bike) => (
                <Bike key={bike.id} bike={bike} onDelete={props.onDelete}></Bike>
            ))}   
        </div>
    )
}

export default Bikes
