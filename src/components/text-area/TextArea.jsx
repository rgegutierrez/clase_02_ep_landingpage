import { useState, useEffect } from 'react'
import styles from './TextArea.module.css'

const TextArea = ({ props }) => {
    const [value, setvalue] = useState(props.value)
    const handleChangeValue = (event) => setvalue(event.target.value)

    useEffect(() => {
        // console.log(value);
    }, [value]);

    return (
        <div className={styles.TextArea}>
            <label className="form-label">{props.label}</label>
            <textarea className="form-control form-control-lg"
                onChange={handleChangeValue}
                rows={props.rows}
                cols={props.cols}
                placeholder={props.placeholder}
            >
                {value}
            </textarea>
        </div>
    )
}

export default TextArea