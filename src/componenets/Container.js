import React from 'react'
import '../stylesheets/container.css'

function Container(props) {
    return (
        <div className='container' id={props.id}>
            {props.children}
        </div>
    )
}

export default Container