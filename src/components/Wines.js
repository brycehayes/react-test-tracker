import React from 'react'
import { useState } from 'react';
import Wine from './Wine'



const Wines = (props) => {
    return (
        <div>
           {props.wines.map( (wine) => (
               <Wine key={wine.id} wine={wine} onDelete={props.onDelete}/>
           ))}
        </div>
    )
}


export default Wines
