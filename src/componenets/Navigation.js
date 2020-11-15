import React from 'react'
import Logo from './Logo'
import '../stylesheets/navigation.css'

function Navigation(props) {
    return (
        <nav className='navBar'>
            <Logo
                iconName='circle-notch'
                iconPrefix='fas'
            />
        </nav>
    )
}

export default Navigation