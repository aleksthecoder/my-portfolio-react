import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Icon(props) {
    return (
        <FontAwesomeIcon 
            icon = {[props.iconPrefix, props.iconName]}
        />
    )
}

export default Icon