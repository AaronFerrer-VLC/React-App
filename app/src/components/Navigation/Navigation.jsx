import { Link } from "react-router-dom"

function Navigation() {
    return (
        <nav className="Navbar">

            <ul>
                <li>
                    <Link to="/dash">Inicio</Link>
                </li>
                <li>
                    <Link to="/about">Sobre mi</Link>
                </li>
                <li>
                    <Link to="/details">Detalles</Link>
                </li>
            </ul>

        </nav>
    )
}
export default Navigation
