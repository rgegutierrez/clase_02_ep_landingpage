import { useEffect } from 'react'
import styles from './TextArea.module.css'

const TextArea = ({ props }) => {

    useEffect(() => {
        // console.log("INIT: TextArea");
    }, []);

    return (
        <div className={styles.TextArea}>
            <label className="form-label">{props.label}</label>
            <textarea className="form-control form-control-lg"
                onChange={props.handle}
                rows={props.rows}
                cols={props.cols}
                placeholder={props.placeholder}
                value={props.value}
            >
            </textarea>
        </div>
    )
}

export default TextArea