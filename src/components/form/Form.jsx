import React from 'react'
import Input from '../../components/input/Input'
import Select from '../../components/select/Select'
import TextArea from '../../components/text-area/TextArea'


const Form = ({ title, subtitle, arrInputs }) => {
    const input = (n, index) => {
        switch (n.type) {
            case 'select':
                return <Select key={index} props={n} />
            case 'textarea':
                return <TextArea key={index} props={n} />
            default:
                return <Input key={index} props={n} />
        }
    }

    const handleSendForm = () => {
        console.log('Form')
        console.log(arrInputs)
    }

    return (
        <div className="row">
            <div className="col">
            </div>
            <div className="col-md-auto">
                <form>
                    <div style={{ marginBottom: '3rem' }}>
                        <h1 className="text-center">{title}</h1>
                        <h6 className="text-center">{subtitle}</h6>
                    </div>
                    {arrInputs.map(input)}
                    <div className="d-grid gap-2">
                        <button onClick={handleSendForm} className="btn btn-success" type="button">Enviar</button>
                    </div>
                </form>
            </div>
            <div className="col">
            </div>
        </div>

    )
}

export default Form