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
                <a href={props.projectLinkGithub} className='projectLink'>
                    <Icon
                        iconName = 'github-alt'
                        iconPrefix = 'fab'
                    />
                </a>
                <a href={props.projectLinkCodepen} className='projectLink'>
                    <Icon
                        iconName = 'codepen'
                        iconPrefix = 'fab'
                    />
                </a>
            </div>
        </div>
    )
}

export default ProjectTile