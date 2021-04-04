import React from 'react'
import Card from '../../components/card/Card'


const Home = (props) => {
    return (
        <main>
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 fw-normal">Cover your page.</h1>
                    <p className="lead fw-normal">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                {props.cards.map((n, index) => <Card key={index} item={n} />)}
            </div>
        </main>
    )
}

export default Home