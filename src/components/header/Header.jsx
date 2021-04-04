import logo from '../../logo.svg'
import Menu from '../../components/menu/Menu'


const Header = (props) => {
    const handleChange = (event) => props.onChange(event.target.value)

    return (
        <header className="mt-auto site-header sticky-top py-3 text-white">
            <div className="mt-auto container">
                <div className="row">
                    <div className="col-md-8">
                        <h3 className="float-md-start mb-0 me-auto"><img src={logo} className="App-logo" alt="logo" />Curso React</h3>
                    </div>
                    <div className="col-md-4">
                        <Menu menu={props.menu} handleChange={handleChange} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header