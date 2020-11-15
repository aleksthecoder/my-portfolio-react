import React from 'react'
import Icon from './Icon'
import '../stylesheets/logo.css'

function Logo(props) {
    return (
        <div className='logo'>
            <div className='logoText'>
            c
            </div>
            <div className='logoIcon'>
                <Icon
                    iconName={props.iconName}
                    iconPrefix={props.iconPrefix}
                />
            </div>
            <div className='logoText'>
                dealeks
            </div>
        </div>
        
    )
}

export default Logo