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

  const arrCard = [
    {
      style: "bg-dark text-white",
      title: "titulo 1",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      style: "bg-light",
      title: "titulo 2",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
  ]



  useEffect(() => {
    document.body.className = "d-flex flex-column min-vh-100"
    console.log(value);
  }, [value]);

  return (
    <div>
        <Header value={value} menu={arrMenu} onChange={handleChange} />
        {value === "Inicio" && <Home cards={arrCard}></Home>}
        {value === "Contacto" && <Contact></Contact>}
        <Footer />
    </div>

  );
}

export default App;
