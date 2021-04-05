import { useEffect } from 'react'

const SectionPrincipal = ({props}) => {

    useEffect(() => {
        // console.log('section-principal');
    });

    return (
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
            <div className="col-md-7 p-lg-5 mx-auto my-5">
                <h1 className="display-4 fw-normal">{props.title}</h1>
                <p className="lead fw-normal" dangerouslySetInnerHTML={{ __html: props.content}}></p>
            </div>
            <div className="product-device shadow-sm d-none d-md-block"></div>
            <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
    )
}

export default SectionPrincipal