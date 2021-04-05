import { useEffect } from 'react'

const SectionSecondary = (props) => {

    useEffect(() => {
        // console.log('section-secondary');
    });

    return (
        <div className={`${props.item.style} me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden`}>
            <div className="my-3 py-3">
                <h2 className="display-5">{props.item.title}</h2>
                <p className="lead" dangerouslySetInnerHTML={{ __html: props.item.content}}></p>
            </div>
        </div>
    )
}

export default SectionSecondary