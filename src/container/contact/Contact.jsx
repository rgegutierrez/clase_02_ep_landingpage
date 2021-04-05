import { useState, useEffect } from 'react'
import Form from '../../components/form/Form'

const Contact = () => {
    const [nombre, setNombre] = useState("")
    const handleNombreChange = (event) => setNombre(event.target.value)
    const [email, setEmail] = useState("")
    const handleEmailChange = (event) => setEmail(event.target.value)
    const [telefono, setTelefono] = useState("")
    const handleTelefonoChange = (event) => setTelefono(event.target.value)
    const [asunto, setAsunto] = useState("")
    const handleAsuntoChange = (event) => setAsunto(event.target.value)
    const [mensaje, setMensaje] = useState("")
    const handleMensajeChange = (event) => setMensaje(event.target.value)

    const arr = [
        {
            key: 0,
            label: "Nombre",
            type: "text",
            value: nombre,
            placeholder: "Rául Carrasco",
            helpText: "",
            handle: handleNombreChange
        },
        {
            key: 1,
            label: "Email",
            type: "email",
            value: email,
            placeholder: "nombre@ejemplo.com",
            helpText: "",
            handle: handleEmailChange
        },
        {
            key: 2,
            label: "Teléfono",
            type: "text",
            value: telefono,
            placeholder: "+56912345678",
            helpText: "",
            handle: handleTelefonoChange
        },
        {
            key: 3,
            label: "Asunto",
            type: "select",
            value: asunto,
            options: [
                { value: "", text: "Seleccione" },
                { value: 1, text: "Página no funciona correctamente" },
                { value: 2, text: "Falta de información" },
                { value: 3, text: "Mal diseño. Dificultad para acceder desde mi dispositivo" },
                { value: 4, text: "Otro" },
            ],
            placeholder: "Seleccione...",
            helpText: "",
            handle: handleAsuntoChange
        },
        {
            key: 4,
            label: "Mensaje",
            type: "textarea",
            value: mensaje,
            rows: 3,
            cols: 5,
            placeholder: "Argumente su razón aquí...",
            helpText: "",
            handle: handleMensajeChange
        },
    ]

    useEffect(() => {
        // console.log("INIT: Contacto");
    }, []);

    return (
        <main>
            <div className="position-relative overflow-hidden p-3 p-md-4 m-md-4 bg-light">
                <Form title="Formulario de Contacto" subtitle="Escribenos y en breve nos pondremos en contancto contigo" arrInputs={arr} />
            </div>
        </main>
    )
}

export default Contact