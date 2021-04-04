import { useState, useEffect } from 'react'
import styles from './Input.module.css'

const Input = ({ props }) => {
    const [value, setvalue] = useState(props.value)
    const handleChangeValue = (event) => setvalue(event.target.value)

    useEffect(() => {
        // console.log(value);
    }, [value]);

    return (
        <div className={styles.Input}>
            <label className="form-label">{props.label}</label>
            <input type={props.type}
                className="form-control form-control-lg"
                value={value}
                onChange={handleChangeValue}
                placeholder={props.placeholder}
            />
            <div className="form-text">
                {props.helpText}
            </div>
        </div>
    )
}

export default Input