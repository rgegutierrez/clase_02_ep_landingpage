import { useState, useEffect } from 'react'
// import logo from './logo.svg'
import './App.css'
import './container/home/Home'
import Home from './container/home/Home'
import Contact from './container/contact/Contact'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'


function App() {
  const [value, setValue] = useState("Inicio")
  const handleChange = (newValue) => setValue(newValue)
  const arrMenu = ["Inicio", "Contacto"]

  const principal = {
      title: "EJERCICIO PRÁCTICO: Landing Page",
      content: `Este ejercicio practico muestra el desarrollo de componentes para la creaciónde una pagina inicial y otra con un formulario de contacto, con varios componentes como <code>Header</code>, <code>Footer</code>, <code>Menu</code>, entre otros.`
  }

  const arrCard = [
    {
      style: "bg-dark text-white",
      title: "Página de Inicio",
      content: "Para mostrar este contenido se generon los componentes <code>SectionPrincipal</code> y <code>SectionSecondary</code>. Con <code>SectionPrincipal</code> se muestra el titulo principal del Landing page y una breve descripción de este. Y con <code>SectionSecondary</code> se muestran estas tarjetas describiendo la <b>Página de Inicio</b> y el <b>Formulario de Contacto</b>."
    },
    {
      style: "bg-light",
      title: "Formulario de Contacto",
      content: "A través del <b>Menu</b>, en la parte superior derecha se puede acceder al <b>Formulario de Contacto</b>, que esta compuesto de un componente <code>Form</code> y que a su vez este se componene <code>Input</code>, <code>Select</code> y <code>TextArea</code>. Al rellenar el formulario y hacer click en Enviar se mostrara la información desplegada a través de la consola del navegador."
    },
  ]

  useEffect(() => {
    document.body.className = "d-flex flex-column min-vh-100"
    // console.log(value);
  }, [value]);

  return (
    <div>
        <Header value={value} menu={arrMenu} onChange={handleChange} />
        {value === "Inicio" && <Home principal={principal} cards={arrCard}></Home>}
        {value === "Contacto" && <Contact></Contact>}
        <Footer />
    </div>

  );
}

export default App;
