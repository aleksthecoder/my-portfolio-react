import React from 'react'
import Icon from './Icon'
import '../stylesheets/projectTile.css'

function ProjectTile(props) {
    return (
        <div className='projectTile'>
            <div className='projecTitle'>
                <h3>{props.projectTitle}</h3>
            </div>

            <div className='projectLinks'>
                <a href={props.projectLinkOne} className='projectLink'>
                    <Icon
                        iconName = {props.iconName}
                        iconPrefix = {props.iconPrefix}
                    />
                </a>
            </div>
        </div>
    )
}

export default ProjectTile