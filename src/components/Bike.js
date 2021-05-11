import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Bike = (props) => {
    return (
        <div className={`bike ${props.bike.available ? 'available' : ''} `} 
            onDoubleClick={() => props.onToggle(props.bike.id)}>


            <h3>{props.bike.company}  
                <FaTimes style={{ color: 'red', cursor: 'pointer'}} 
                        onClick={() =>  props.onDelete(props.bike.id)}
                        /></h3>
            <p>{props.bike.type}</p>
        </div>
    )
}

export default Bike



