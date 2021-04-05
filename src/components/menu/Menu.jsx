import { useEffect } from 'react'
import styles from './Menu.module.css'

const Menu = (props) => {

    useEffect(() => {
        // console.log("Menu");
    });

    return (
        <nav className="container d-flex flex-column flex-md-row justify-content-between">
            <div className="container-xxl d-flex align-items-md-center">
                {props.menu.map(
                    (name, index) => <button key={index} className={`${styles.ButtonMenu} btn btn-outline-light py-2 d-none d-md-inline-block`} value={name} onClick={props.handleChange}>{name}</button>
                    )}
            </div>
        </nav>
    )
}

export default Menu