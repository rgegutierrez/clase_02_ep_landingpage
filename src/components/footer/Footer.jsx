import logo from '../../logo.svg'

const Footer = ({ props }) => {
    return (
        <footer className="footer mt-auto pt-1 bg-light text-center text-lg-start">
            <div className="text-center p-3">
                <img src={logo} className="App-logo" alt="logo" />&copy; {(new Date()).getFullYear()}
                <a className="text-dark" href="https://github.com/rgegutierrez/clase_02_ep_landingpage">Repositorio del Proyecto</a>
            </div>
        </footer>
    )
}

export default Footer