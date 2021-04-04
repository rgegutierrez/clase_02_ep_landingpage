import Form from '../../components/form/Form'

const Contact = () => {
    const arr = [
        {
            "key": 0,
            "label": "Nombre",
            "type": "text",
            "value": "",
            "placeholder": "Rául Carrasco",
            "helpText": "",
        },
        {
            "key": 1,
            "label": "Email",
            "type": "email",
            "value": "",
            "placeholder": "nombre@ejemplo.com",
            "helpText": "",
        },
        {
            "key": 2,
            "label": "Teléfono",
            "type": "text",
            "value": "",
            "placeholder": "+56912345678",
            "helpText": "",
        },
        {
            "key": 3,
            "label": "Asunto",
            "type": "select",
            "options": [
                { "value": "", "text": "Seleccione" },
                { "value": 0, "text": "Página no funciona correctamente" },
                { "value": 0, "text": "Falta de información" },
                { "value": 0, "text": "Mal diseño. Dificultad para acceder desde mi dispositivo" },
                { "value": 0, "text": "Otro" },
            ],
            "placeholder": "Seleccione...",
            "helpText": "",
        },
        {
            "key": 4,
            "label": "Mensaje",
            "type": "textarea",
            "rows": 3,
            "cols": 5,
            "placeholder": "Argumente su razón aquí...",
            "helpText": "",
        },
    ]

    return (
        <main>
            <div className="position-relative overflow-hidden p-3 p-md-4 m-md-4 bg-light">
                <Form title="Formulario de Contacto" subtitle="Escribenos y en breve nos pondremos en contancto contigo" arrInputs={arr} />
            </div>
        </main>
    )
}

export default Contact