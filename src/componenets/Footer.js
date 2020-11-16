import React from 'react'
import '../stylesheets/footer.css'
import Icon from '../componenets/Icon'

function Footer() {
    return (
        <footer>
            <div className='legalInformation'>
                Copyrights @ 2020 CodeAleks
            </div>
            <div className='socialIcons'>
            <a href='https://github.com/aleksthecoder' className='socialIcon'>
                <Icon
                    iconName = 'github'
                    iconPrefix = 'fab'
                />
            </a>
            </div>
        </footer>
    )
}

export default Footer