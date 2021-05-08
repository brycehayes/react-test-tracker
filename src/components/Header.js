import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


//const Header = ({ title }) <h1>{title}</h1>
const Header = (props) => {

    


    return (
        <header className='header'>
            <h1>{props.title}</h1> 
            <Button color={!props.showAddTask ? 'green' : 'black'} text={!props.showAddTask ? 'Add' : 'Close'} onClick={props.onAdd}/>   
        </header>
    )
}

Header.propTypes = {
    title:PropTypes.string,    
}

// CSS in JS
// const headingStyle = { 
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default Header
