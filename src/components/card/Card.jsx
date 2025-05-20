import React from 'react'

const Card = (props) => {
    return (
        <div style={{ backgroundColor: '#ffc000', width: '400px', height: '400px', margin: '5px' }}>
            <li>{props.todo.title}</li>
        </div>
    )
}

export default Card