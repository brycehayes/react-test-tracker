import React from 'react'
import { FaTimes } from 'react-icons/fa';

const Wine = (props) => {
    return (
        <div className="wine">
            <h3>{props.wine.name}<FaTimes style={{ color: 'red', cursor: 'pointer'}} 
            onClick={()=>props.onDelete(props.wine.id)}/></h3>
        </div>
    )
}

export default Wine
