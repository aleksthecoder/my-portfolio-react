import React from 'react'
import '../stylesheets/service.css'




function Service(props) {

    return (
        <div className='service'>
            <div className='serviceIcon'>
                <i className={props.serviceIcon}> </i>
            </div>
            <div className='serviceBody'>
                <h3>{props.serviceTitle}</h3>
                <p>{props.serviceText}</p>
            </div>
        </div>
    )
}


export default Service