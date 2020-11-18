import Icon from './Icon'
import '../stylesheets/service.css'

function Service(props) {

    return (
        <div className='service'>
            <div className='serviceIcon'>
                <Icon
                    iconName = {props.iconName}
                    iconPrefix = {props.iconPrefix}
                />
            </div>
            <div className='serviceBody'>
                <h3>{props.serviceTitle}</h3>
                <p>{props.serviceText}</p>
            </div>
        </div>
    )
}


export default Service