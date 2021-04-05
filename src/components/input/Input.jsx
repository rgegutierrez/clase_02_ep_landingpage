import { useEffect } from 'react'
import styles from './Input.module.css'

const Input = ({ props }) => {
    useEffect(() => {
        // console.log("INIT: Input");
    }, []);

    return (
        <div className={styles.Input}>
            <label className="form-label">{props.label}</label>
            <input type={props.type}
                className="form-control form-control-lg"
                value={props.value}
                onChange={props.handle}
                placeholder={props.placeholder}
            />
            <div className="form-text">
                {props.helpText}
            </div>
        </div>
    )
}

export default Input