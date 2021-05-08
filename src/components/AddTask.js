import React from 'react';
import { useState } from 'react';


const AddTask = (props) => {

/**
 * So each input is going to have its own piece of component level state.
 *  setText is the method to update the state for text
 */    
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);


/**
 * The preventDefault() method cancels the event if its cancelable, meaning the default action
 * that belongs to the event wil not occur. e.g. Clicking a submit button, prevent it from submiting a form
 * Click a link, prevent the link from following the URL.
 */
const onSubmit = (e) => {
    e.preventDefault();  //So it doesn't submit to a page.

    //Validation for the task text
    if(!text) {
        alert('Please add a task');
        return;
    }

    props.onAdd({text, day, reminder});

    setText('');
    setDay('');
    setReminder(false);

} 

//document.getElementById('myAnchor').addEventListener('click',  (e) => e.preventDefault());



/** 
 *  onChange={} when you start to type in the input this will fire off the onChange
 *   setText(e.target.value)is whatever is typed into the input field
 */
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type="text" 
                    placeholder='Add Task' 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type="text" 
                    placeholder='Add Day & Time' 
                    value={day} 
                    onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type="checkbox" 
                    value={reminder}
                    checked={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input className="btn btn-block" type='submit' value='Save'/>

            <div>
                <a id="myAnchor" href="https://w3schools.com/">Go to W3Schools.com</a>
            </div>
        </form>
    )
}




export default AddTask
