import React from 'react'

const Books = (props) => {

    

    return (
        <div>
            { props.books.map( (book) => (
                <h2 key={book.id}>{book.title}</h2>) )
                
            }
            
        </div>
    )
}

export default Books
