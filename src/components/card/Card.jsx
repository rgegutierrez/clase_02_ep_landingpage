import { useEffect } from 'react'

const Card = (props) => {

    useEffect(() => {
        console.log('card');
    });

    return (
        <div className={`${props.item.style} me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden`}>
            <div className="my-3 py-3">
                <h2 className="display-5">{props.item.title}</h2>
                <p className="lead">{props.item.content}</p>
            </div>
        </div>
    )
}

export default Card