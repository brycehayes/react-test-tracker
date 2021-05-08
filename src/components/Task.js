import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Task = (props) => {
    return (
        <div className={`task ${props.taskprop.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => props.onToggle(props.taskprop.id)}>
           <h3> 
               {props.taskprop.text} 
               <FaTimes style={{ color: 'red', cursor: 'pointer'}}
               onClick={() =>  props.onDelete(props.taskprop.id)}/>
            </h3>
           <p>{props.taskprop.day}</p> 
        </div>
    )
}

export default Task
