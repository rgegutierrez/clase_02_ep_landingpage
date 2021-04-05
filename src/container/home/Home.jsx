import React from 'react'
import SectionPrincipal from '../../components/section-principal/SectionPrincipal'
import SectionSecondary from '../../components/section-secondary/SectionSecondary'


const Home = (props) => {
    return (
        <main>
            <SectionPrincipal props={props.principal} />

            <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                {props.cards.map((n, index) => <SectionSecondary key={index} item={n} />)}
            </div>
        </main>
    )
}

export default Home